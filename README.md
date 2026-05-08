# 🧠 Midterm Project — React Full Stack Frontend App

## 📌 Overview

This project is a React-based frontend application built for the midterm exam.  
It demonstrates routing, authentication flow, state management, UI design systems, and data grid integration.

The application simulates a basic admin system with login protection, dashboards, and interactive data operations.

---

## 🏗️ Architecture

The project is structured into clear layers:

### 1. Entry Layer
- `main.tsx` initializes React app
- Global styling (Sass)
- Toast notification system
- Theme provider integration

### 2. Routing Layer
- `AppRoutes.tsx`
- Defines all routes:
  - `/login`
  - `/signup`
  - `/dashboard`
  - `/profile`
  - `/settings`

### 3. Guard System
- `AuthGuard`: protects private routes
- `GuestGuard`: prevents logged-in users from accessing auth pages

### 4. Layout System
- `AuthLayout`: used for login/signup pages
- `MainLayout`: used for dashboard and main pages

### 5. Pages
- Authentication pages (Login / Signup)
- Main pages (Dashboard / Profile / Settings)

---

## 🔐 Authentication Flow

- User must login through `/login`
- Email must include `@`
- Password must be at least 5 characters
- Confirmation popup before login
- Simulated loading delay (2 seconds)
- Authentication state stored using React state

---

## 📊 Dashboard Features

The dashboard uses **AG Grid** for table management.

Features include:
- Display user data
- Toggle user status (Active / Inactive)
- Delete rows dynamically
- Toast notifications for all actions

---

## 🎨 Styling System

Instead of Tailwind, the project uses **Sass (SCSS)**:

- Global styles in `main.scss`
- Reusable UI classes:
  - `.full-screen`
  - `.card`
  - `.btn`
- Clean layout system

---

## 🔔 Notifications

A reusable toast system is implemented using `react-hot-toast`.

- Success messages
- Error alerts
- Loading indicators

All triggered via a reusable helper function.

---

## 🧠 Technologies Used

- React
- TypeScript
- React Router
- Sass (SCSS)
- AG Grid
- React Hot Toast
- Material UI (theme support)

---

## 📂 Project Structure

---

## 🚀 Key Concepts Demonstrated

- Component-based architecture
- Protected routing (Auth system)
- State management with hooks
- CRUD operations in UI
- Reusable UI system
- Separation of concerns
- Clean Git commit workflow

---

## 🧾 Git Strategy

Each feature was developed in incremental commits:

- Authentication system
- Styling system migration
- Dashboard implementation
- CRUD functionality
- TypeScript refactoring

---

## 👨‍💻 Author Notes

This project focuses on:
- clean architecture
- scalable structure
- real-world frontend patterns
- exam-level implementation quality

---

## ✅ Status

✔ Fully functional frontend system  
✔ Authentication flow implemented  
✔ Dashboard with CRUD operations  
✔ Styled with Sass  
✔ Type-safe components