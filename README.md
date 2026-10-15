# Personal Funnel Landing Page

Public-facing landing page for rental property listings.

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Axios

## Features

- Display rental property listings
- Filter by district
- Responsive design
- Contact via Zalo button
- Privacy protection (no exact addresses shown)

## Prerequisites

- Node.js 18+
- npm or yarn

## Local Development

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Run dev server
npm run dev
```

Development server: `http://localhost:5174`

## Environment Variables

Create `.env` file:

```
VITE_API_URL=http://localhost:5025/api
VITE_DEFAULT_ZALO=https://zalo.me/YOUR_PHONE
```

For production:

```
VITE_API_URL=https://your-backend.onrender.com/api
VITE_DEFAULT_ZALO=https://zalo.me/YOUR_PHONE
```

## Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Deployed on Vercel (Free tier)

### Deploy Steps

1. Push to GitHub
2. Import project on Vercel
3. Set environment variables
4. Deploy

Production URL: `https://thuephonghn.vercel.app`

## Project Structure

```
src/
├── components/       # React components
├── pages/           # Page components
├── services/        # API services
├── utils/           # Utility functions
└── App.jsx          # Main app component
```

## Key Components

- **PropertyList** - Display property cards
- **PropertyCard** - Individual property card
- **FilterBar** - Filter by district, price, etc.
- **ContactButton** - Zalo contact button

## License

Private - All rights reserved
