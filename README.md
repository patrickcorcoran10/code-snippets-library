# Code Snippets Library

A lightweight full-stack app for storing, viewing, editing, and managing reusable code snippets. Built with Next.js and Prisma, the app offers a simple dashboard for browsing saved snippets, a dedicated viewing page for each snippet, and a Monaco-powered editor for updating code.

## Features

- Create new code snippets with a title and source code
- Browse saved snippets from a central library view
- Open any snippet to review its full content
- Edit snippets with a browser-based code editor
- Delete snippets from the UI
- Persistent storage using Prisma ORM with PostgreSQL

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- Neon Serverless Database
- Monaco Editor via `@monaco-editor/react`
- ESLint
- dotenv / dotenv-cli

## Libraries and Dependencies

- `next` — App framework and routing
- `react` / `react-dom` — UI rendering
- `@prisma/client` — Prisma database client
- `prisma` — Schema generation and migrations
- `@monaco-editor/react` — In-browser code editor
- `@neondatabase/serverless` — Serverless Postgres connection support
- `tailwindcss` — Utility-first styling
- `dotenv` / `dotenv-cli` — Environment variable management
- `eslint` / `eslint-config-next` — Code quality and linting

## Project Structure

```text
.
├── prisma/
│   └── schema.prisma
├── public/
│   ├── screenshots/
│   │   ├── dashboard.svg
│   │   └── editor.svg
│   └── ...
├── src/
│   ├── actions/
│   ├── app/
│   ├── components/
│   └── db/
├── .env.local
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Screenshots

![Dashboard preview](public/screenshots/dashboard.svg)

![Snippet editor preview](public/screenshots/editor.svg)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Set up your environment variables in `.env.local`:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/snippets"
```

3. Run the database locally if needed:

```bash
npm run start:db
```

4. Generate Prisma client and run migrations:

```bash
npm run prisma:generate:local
npm run prisma:migrate:local
```

5. Start the app:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Notes

This project is a simple snippet manager designed for quick code storage and reuse. It is ideal for developers who want a lightweight, local-first library for snippets without the overhead of a larger knowledge base or documentation platform.
