# 🎬 Full-Stack Netflix Clone

A fully responsive, full-stack movie browsing application inspired by Netflix. This project features a secure user authentication system, dynamic movie data fetched via the TMDB API, and a custom-built backend integrated with a cloud MySQL database.

**🔴 Live Demo:** [View the Live Application Here](https://netflix-clone1-rose.vercel.app/)

## ✨ Key Features

* **Secure Authentication:** Full registration and login system with encrypted passwords using `bcrypt`.
* **Dynamic Movie Data:** Real-time fetching of trending movies, top-rated lists, and genre-specific categories using the TMDB API.
* **Responsive UI:** A sleek, dark-themed UI built with Tailwind CSS that adapts perfectly to desktop, tablet, and mobile screens.
* **Protected Routes:** React Router DOM implementation to restrict database access to authenticated users only.
* **Microservices Architecture:** Distinct separation of concerns with a React frontend and a Python backend API.

## 🛠️ Tech Stack

**Frontend (Client)**
* **React.js** (via Vite for optimized building)
* **Tailwind CSS** (for utility-first, rapid styling)
* **Axios** (for handling asynchronous API requests)
* **React Router** (for smooth, single-page client routing)
* **Deployed on:** Vercel

**Backend (Server)**
* **Python & Flask** (for building lightweight, robust RESTful API endpoints)
* **Bcrypt** (for secure, salted password hashing)
* **MySQL Connector** (for database cursor management)
* **Deployed on:** Render

**Database**
* **MySQL** (Cloud database hosted securely on Aiven)

## 🚀 How It Works

1. **The Client:** The user visits the React frontend. If they are not authenticated, they are presented with the secure Login/Registration screen.
2. **The API:** Upon form submission, Axios sends a POST request with the user's data to the live Flask backend.
3. **The Database:** The Python server hashes the password and securely executes SQL queries against the Aiven MySQL database. 
4. **The App:** Once successfully authenticated, the frontend redirects the user to the `/browse` route, where Axios fetches live movie posters and data directly from TMDB.

## 👨‍💻 Author

Developed by **Syed Junaid Hussain**
