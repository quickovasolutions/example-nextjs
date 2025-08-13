# Tool Board - Next.js Application

A modern, responsive tool board application built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Tool Discovery**: Browse through a collection of useful tools organized by categories
- **Search Functionality**: Search tools by name or description
- **Category Filtering**: Filter tools by category (Image, Video, Document, Utility, Design, Audio)
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean, professional interface using Tailwind CSS and shadcn/ui

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React hooks (useState, useMemo)

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run the development server:
   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main tool board page
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx      # Button component
│   │   ├── card.tsx        # Card component
│   │   ├── badge.tsx       # Badge component
│   │   └── input.tsx       # Input component
│   ├── header.tsx          # Header with search and auth buttons
│   ├── search-bar.tsx      # Search input component
│   ├── tool-card.tsx       # Individual tool display card
│   └── category-filter.tsx # Category filtering component
└── data/
    └── tools.ts            # Tool data and categories
```

## Components

### Header
- Logo and title
- Centered search bar
- Placeholder login/signup buttons

### Search Bar
- Real-time search functionality
- Searches both tool names and descriptions

### Category Filter
- Clickable category badges
- Visual feedback for selected category

### Tool Cards
- Tool information display
- Category badges
- Action buttons
- Hover effects and transitions

## Available Tools

The application includes sample tools in various categories:
- **Image**: Image Resizer, PNG to JPG Converter
- **Video**: Video Downloader
- **Document**: PDF Compressor
- **Utility**: Time Zone Calculator, QR Code Generator
- **Design**: Color Palette Generator
- **Audio**: Text to Speech

## Search Functionality

The search feature allows users to:
- Search by tool name
- Search by tool description
- Filter results by category
- See real-time search results
- Clear filters to reset the view

## Responsive Design

- Mobile-first approach
- Grid layout that adapts to screen size
- Touch-friendly interface
- Optimized for all device types

## Future Enhancements

- Tool implementation (currently placeholder)
- User authentication system
- Tool favorites and history
- Advanced filtering options
- Dark mode support
- Tool usage analytics

## Development

- **Type Checking**: `pnpm type-check`
- **Linting**: `pnpm lint`
- **Build**: `pnpm build`
- **Start**: `pnpm start`

## Contributing

This is a demonstration project showcasing modern web development practices with Next.js and TypeScript.
