# Resumind

Resumind is a full-stack, serverless web application that uses AI to analyze and score resumes. Upload a PDF, optionally provide a job title and description, and receive detailed feedback across multiple categories including ATS compatibility, tone and style, content, structure, and skills.

## Features

- **AI-Powered Analysis** -- Leverages Claude Sonnet 4 via Puter.js to evaluate resumes against job descriptions.
- **Comprehensive Scoring** -- Receives an overall score (0-100) along with breakdowns for ATS, tone, content, structure, and skills.
- **Detailed Feedback** -- Each category includes actionable tips highlighting what was done well and what can be improved.
- **PDF Upload** -- Drag-and-drop file upload with client-side PDF processing using PDF.js.
- **Resume Dashboard** -- View all analyzed resumes with score previews and thumbnail images.
- **Serverless Architecture** -- Powered entirely by Puter.js for authentication, file storage, AI inference, and data persistence; no backend server required.

## Tech Stack

- **React 19** with **React Router v7** (full-stack, SSR)
- **TypeScript** for type safety
- **Vite** as the build tool and dev server
- **Tailwind CSS v4** for styling
- **Puter.js** for serverless backend (auth, storage, AI, key-value store)
- **PDF.js** (pdfjs-dist) for client-side PDF rendering
- **Zustand** for state management
- **Docker** for containerized deployment

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### Available Scripts

```bash
npm install        # Install dependencies
npm run dev        # Start dev server with HMR
npm run build      # Produce an optimized production build
npm run start      # Serve the production build
npm run typecheck  # Generate route types and run TypeScript validation
```

## Deployment

A multi-stage `Dockerfile` is included for containerized deployment. Build and run the image with your preferred container runtime:

```bash
docker build -t resumind .
docker run -p 3000:3000 resumind
```
