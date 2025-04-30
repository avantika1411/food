# Food Delivery App

Welcome to the **Food Delivery App**! This repository contains a web application built using React, Vite, and Express, facilitating a comprehensive frontend-backend solution for food delivery services.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Setup and Installation](#setup-and-installation)
4. [Project Structure](#project-structure)
5. [Dependencies](#dependencies)
6. [Running the Project](#running-the-project)
7. [Screenshots/Demo](#screenshotsdemo)
8. [Contributing](#contributing)
9. [License](#license)

---

## Project Overview

The Food Delivery App is a modern web application designed to provide a seamless user experience for ordering food online. It includes features like user authentication, menu browsing, and order management.

---

## Features

- **Frontend:** React components styled with CSS.
- **Backend:** RESTful API built with Express.js.
- **Authentication:** User login and secure authentication system.
- **Database:** MongoDB for data storage.

---

## Setup and Installation

Follow these steps to set up the project locally:

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [Git](https://git-scm.com/)
- MongoDB database instance

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/avantika1411/food.git
   cd food
   ```

2. Navigate to the respective directories (`Admin`, `frontend`, `Backend`) and install dependencies:
   ```bash
   cd Admin
   npm install
   cd ../frontend
   npm install
   cd ../Backend
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file inside the `Backend` directory.
   - Add the following variables:
     ```
     MONGO_URI=<your-mongodb-uri>
     JWT_SECRET=<your-jwt-secret>
     ```

---

## Project Structure

The repository is divided into three main directories:
- **Admin:** React-based admin panel with Vite integration.
- **Frontend:** React-based user-facing application.
- **Backend:** Express-based RESTful API service.

---

## Dependencies

### Frontend
- React: `^18.3.1`
- React Router DOM: `^7.5.1`
- Axios: `^1.9.0`

### Backend
- Express: `^5.1.0`
- Mongoose: `^8.13.2`
- JSON Web Token: `^9.0.2`

### Admin
- React: `^19.0.0`
- React Toastify: `^11.0.5`

---

## Running the Project

### Backend
1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   npm run server
   ```
2. Backend server runs on `http://localhost:4000`.

### Frontend
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   npm run dev
   ```
2. Frontend application runs on `http://localhost:5173`.

### Admin Panel
1. Navigate to the `Admin` directory:
   ```bash
   cd Admin
   npm run dev
   ```
2. Admin panel runs on `http://localhost:5173`.

---

## Screenshots/Demo

### Homepage
![Homepage Screenshot](https://via.placeholder.com/600x400)

### Admin Panel
![Admin Panel Screenshot](https://via.placeholder.com/600x400)

---

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## License

This project is licensed under the MIT License.

---

Happy Coding! 🎉
