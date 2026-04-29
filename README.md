# Syllabus Server

TypeScript/Express backend that serves course syllabus data — classes, sections, and instructors — for the [syllabus-client](../syllabus-client) frontend.

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/csci/` | Get all course sections with class and instructor details |
| `GET` | `/api/csci/:sectionId` | Get a single section with class and instructor details |
| `GET` | `/api/class/:classId` | Get a class by ID |
| `GET` | `/api/section/:sectionId` | Get a section by ID |

## Tech Stack

- **Language:** TypeScript
- **Framework:** Express
- **Database:** MySQL (via mysql2)

## Data Models

- **Class** — course information (name, description, credits, etc.)
- **ClassSection** — a specific section of a course (CRN, instructor, schedule)
- **Instructor** — faculty information (name, email, office, etc.)

## Setup

### Requirements

- Node.js 18+
- MySQL instance

### Installation

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root directory:

```env
MYSQL_HOST=127.0.0.1
MYSQL_USER=your_mysql_user
MYSQL_PASSWORD=your_mysql_password
MYSQL_DATABASE=syllabus
PORT=5004
```

3. Build and start the server:

```bash
npm run build && npm start
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the compiled server |
| `npm run build` | Compile TypeScript to `dist/` |
