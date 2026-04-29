# Lewis Syllabus Server

TypeScript/Express backend that serves course syllabus data — classes, sections, and instructors — for the [LewisSyllabusReact](../LewisSyllabusReact) frontend.

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
- **Database:** MongoDB (via Mongoose)

## Data Models

- **Class** — course information (name, description, credits, etc.)
- **ClassSection** — a specific section of a course (CRN, instructor, schedule)
- **Instructor** — faculty information (name, email, office, etc.)

## Setup

### Requirements

- Node.js 18+
- MongoDB instance

### Installation

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

3. Start the server:

```bash
npm start
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Build TypeScript and start the server |
| `npm run build` | Compile TypeScript to `dist/` |
