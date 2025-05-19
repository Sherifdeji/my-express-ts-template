# 🚀 TypeScript Express Template

This is a minimal Express.js setup using TypeScript. It's structured for my personal backend development workflow — but feel free to clone, fork, or build on top of it for your own projects.
Contributions and feedback are also welcome!

## 🧰 Features

- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- Environment variable support with `dotenv`
- Nodemon and ts-node-dev for development
- Clean and modular folder structure

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Sherifdeji/my-express-ts-template.git
cd my-express-ts-template
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up your environment variables

- Create a .env file at the root and define:

```env
DATABASE_URL="your_postgres_connection_string"
PORT=3000
```

### 4. Prisma setup

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Run the server

```bash
npm run start:dev
```

---

_**Built with ❤️ by Sherif Ibrahim**_
