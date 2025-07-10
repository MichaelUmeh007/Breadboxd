
# 🍞 Breadboxd MVP Specification & Checklist (Resume-Ready Scope)

## 🧾 Overview

This reduced-scope MVP for Breadboxd includes all the core functionality needed to demonstrate your full-stack skills, without overbuilding. It focuses on:

- Posting and viewing recipes
- Writing and displaying reviews
- Basic user authentication
- Responsive UI and deployment

---

## ✅ MVP Feature Checklist

### 1. 📐 Setup

- [ ] Create GitHub repo and setup dev/prod branches
- [ ] Define simple ERD:
  - `User`, `Recipe`, `Review`
- [ ] Set up `.env` files for secrets and DB credentials

---

### 2. ⚙️ Backend (Spring Boot + PostgreSQL)

- [ ] Initialize Spring Boot project
- [ ] Connect to PostgreSQL via JPA
- [ ] Set up entities and relationships:
  - User ↔ Recipe
  - Recipe ↔ Review
- [ ] Configure Spring Security with JWT auth
- [ ] Routes:
  - `POST /auth/register`, `POST /auth/login`
  - `GET /users/me`
  - `GET/POST/PUT/DELETE /recipes`
  - `GET/POST/DELETE /recipes/{id}/reviews`

---

### 3. 🖥️ Frontend (React + Material UI)

- [ ] Set up project with React + MUI + React Router
- [ ] Auth context for managing user session
- [ ] Pages:
  - Login / Register
  - Recipe List
  - Recipe Detail
  - Post/Edit Recipe
  - Add Review
  - Profile Page (optional)

---

### 4. 💄 UI Polish & UX

- [ ] Mobile-friendly responsive layout
- [ ] Toast notifications (success/error)
- [ ] Basic form validation
- [ ] Error/loading states

---

### 5. 🚀 Deployment

- [ ] Deploy backend to Render or Railway
- [ ] Deploy frontend to Vercel or Netlify
- [ ] Configure CORS and production `.env`
- [ ] Create demo user and seed data
- [ ] Link live demo + repo in your resume

---

## 🗂 Folder Structure Example

### Backend
```
breadboxd-backend/
├── controller/
├── dto/
├── entity/
├── repository/
├── security/
├── service/
└── BreadboxdApplication.java
```

### Frontend
```
breadboxd-frontend/
├── components/
├── pages/
├── api/
├── context/
└── App.jsx
```

---

## 📌 Tip for Resume

> **Breadboxd** – Full-stack recipe sharing app using Spring Boot, PostgreSQL, and React. Built secure user auth, recipe posting, and review system. Mobile-responsive and deployed on Vercel/Render.
