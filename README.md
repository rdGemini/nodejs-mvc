# Node.js MVC Project

This is a Node.js project with MVC architecture. It provides a REST API for managing users.

## Requirements

- Node.js
- MongoDB

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with the following variables:
    ```plaintext
    PORT=3000
    DB_URI=your_mongodb_uri
    TOKEN_SECRET=your_secret_key
    ```
4. Start the server: `npm start`

## API Endpoints

### Authentication
All endpoints require basic authentication. Include the token in the `Authorization` header.

### Users
- **GET /worko/user**: List all users
- **GET /worko/user/:userId**: Get user details
- **POST /worko/user**: Create a new user
- **PUT /worko/user/:userId**: Update user details
- **PATCH /worko/user/:userId**: Partially update user details
- **DELETE /worko/user/:userId**: Soft delete user

### Payload
```json
{
    "email": "user@example.com",
    "name": "User Name",
    "age": 30,
    "city": "City",
    "zipCode": "12345"
}
