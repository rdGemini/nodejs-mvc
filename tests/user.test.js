const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

describe('User API', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('should create a new user', async () => {
        const res = await request(app)
            .post('/worko/user')
            .send({
                email: 'test@example.com',
                name: 'Test User',
                age: 30,
                city: 'Test City',
                zipCode: '12345'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('email');
    });

    it('should fetch all users', async () => {
        const res = await request(app).get('/worko/user');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    it('should fetch a user by ID', async () => {
        const user = await request(app).post('/worko/user').send({
            email: 'test2@example.com',
            name: 'Test User 2',
            age: 25,
            city: 'Test City 2',
            zipCode: '54321'
        });
        const res = await request(app).get(`/worko/user/${user.body._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('email');
    });

    it('should update a user', async () => {
        const user = await request(app).post('/worko/user').send({
            email: 'test3@example.com',
            name: 'Test User 3',
            age: 28,
            city: 'Test City 3',
            zipCode: '12345'
        });
        const res = await request(app)
            .put(`/worko/user/${user.body._id}`)
            .send({
                name: 'Updated Test User 3'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toBe('Updated Test User 3');
    });

    it('should soft delete a user', async () => {
        const user = await request(app).post('/worko/user').send({
            email: 'test4@example.com',
            name: 'Test User 4',
            age: 35,
            city: 'Test City 4',
            zipCode: '67890'
        });
        const res = await request(app).delete(`/worko/user/${user.body._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('User deleted');
    });
});
