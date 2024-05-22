# Transactly

Welcome to Transactly! This user-friendly payment app facilitates secure and instant money transfers. Sign up to receive a random balance and start enjoying seamless financial transactions with Transactly.

## Features

- **Secure Transactions**: 
  - Your transactions are protected with top-tier security measures.

- **Instant Transfers**:
  - Send money instantly to anyone.

- **Random Balance**:
  - Receive a surprise balance when you sign up.

- **User-Friendly Interface**:
  - Simple and intuitive design for easy navigation.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Version Control**: Git, GitHub

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/transactly.git
    cd transactly
    ```

2. **Install dependencies**
    - For the server:
        ```bash
        cd server
        npm install
        ```
    - For the client:
        ```bash
        cd ../client
        npm install
        ```

3. **Set up the environment variables**
    - Create a `.env` file in the `server` directory and add the following variables:
        ```env
        PORT=your_PORT
        JWT_SECRET=your_jwt_secret
        MONGODB_URI=your_mongodb_uri
        ```
   
   - Create a `.env` file in the `client` directory and add the following variables:
        ```env
        VITE_PORT=your_PORT
        ```

4. **Run the application**
    - Start the backend server:
        ```bash
        cd server
        npm start
        ```
    - Start the frontend server:
        ```bash
        cd ../client
        npm run dev
        ```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards and includes appropriate tests.
