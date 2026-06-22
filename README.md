# ArtFolio

A full-stack portfolio platform built for a multidisciplinary visual artist. The site displays curated works across multiple mediums (glass, ceramics, printmaking, acrylic) through a dynamic gallery, and is live in production at **[huan-zhao.com](https://huan-zhao.com)**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Java 17, Spring Boot (MVC), JPA/Hibernate |
| Frontend | React, Vite, React Router |
| Database | PostgreSQL |
| Infrastructure | Docker, nginx, DigitalOcean Droplet |
| Storage | DigitalOcean Spaces (S3-compatible) |
| DNS / SSL | Cloudflare |

---

## Architecture

```
Client (React + Vite)
        │
        ▼
   nginx reverse proxy
        │
   ┌────┴────────────┐
   │                 │
Static files    /api/ → Spring Boot (port 8080)
                         │
                    PostgreSQL (Docker)
                         │
               DigitalOcean Spaces (image assets)
```

**Data model:** `Portfolio → Projects → Assets` (3-tier relational hierarchy)

- REST API follows DTO-based contracts to decouple the API layer from persistence
- Centralized exception handling returns consistent 4xx responses
- Images served via CDN URL from DigitalOcean Spaces

---

## Features

- **Gallery** — dynamically groups artwork by category with cover image thumbnails
- **Project detail** — displays individual assets per project
- **Contact page** — artist contact information
- **Production deployment** — Dockerized backend + frontend served via nginx on a DigitalOcean Droplet

---

## Running Locally

### Prerequisites
- Java 17
- Node.js 18+
- Docker & Docker Compose
- Maven

### 1. Clone the repo

```bash
git clone https://github.com/JackieSZhan/ArtFolio.git
cd ArtFolio
```

### 2. Start the database

```bash
docker compose up -d artfolio-db
```

### 3. Run the backend

```bash
cd backend
mvn spring-boot:run
```

Backend runs on `http://localhost:8080`

### 4. Run the frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

---

## API Overview

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/portfolios` | List all portfolios |
| GET | `/api/portfolios/{id}` | Get portfolio by ID |
| GET | `/api/projects/{id}` | Get project with assets |
| POST | `/api/portfolios` | Create portfolio |
| POST | `/api/projects` | Create project |
| POST | `/api/assets` | Upload asset metadata |

---

## Live Demo

**[huan-zhao.com](https://huan-zhao.com)**

---

## Author

Built by **Jackie Zhan** — [github.com/JackieSZhan](https://github.com/JackieSZhan)
