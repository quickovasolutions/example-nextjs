# Cursor Rules for Next.js Hello World App

## Project Overview
A simple Hello World web application built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Package Manager**: pnpm (preferred) or npm

## Code Style
- Use TypeScript strict mode
- Use consistent indentation (2 spaces)
- Write clean, readable code with proper types
- Add JSDoc comments for complex functions
- Follow Next.js and React best practices

## File Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   └── ui/                 # shadcn/ui components
└── lib/
    └── utils.ts            # Utility functions
```

## Next.js Guidelines
- Use App Router (not Pages Router)
- Keep pages simple and focused
- Use server components by default
- Only use client components when necessary
- Follow Next.js file-based routing conventions

## TypeScript Guidelines
- Enable strict mode in tsconfig.json
- Define proper interfaces and types
- Avoid `any` type - use proper typing
- Use type inference when possible
- Export types from dedicated type files

## Tailwind CSS Guidelines
- Use utility-first approach
- Leverage Tailwind's design system
- Use consistent spacing (4px grid)
- Follow mobile-first responsive design
- Use semantic color names when possible

## shadcn/ui Guidelines
- Install components as needed
- Customize components through CSS variables
- Follow shadcn/ui design patterns
- Use consistent component props
- Maintain accessibility standards

## Component Guidelines
- Keep components small and focused
- Use proper prop types
- Implement proper error boundaries
- Ensure accessibility (ARIA labels, keyboard navigation)
- Use semantic HTML elements

## Development Workflow
- Start with a working prototype
- Add features incrementally
- Test in multiple browsers
- Use Next.js development server
- Implement proper error handling

## Code Quality
- Write self-documenting code
- Avoid unnecessary complexity
- Use meaningful variable and function names
- Handle errors gracefully
- Follow React hooks best practices
- Implement proper loading states

## Performance
- Use Next.js built-in optimizations
- Implement proper image optimization
- Use dynamic imports when appropriate
- Minimize bundle size
- Implement proper caching strategies

## Testing
- Test components in isolation
- Verify accessibility compliance
- Test responsive design
- Validate TypeScript compilation
- Check for console errors

## Deployment
- Use Vercel for easy deployment
- Configure environment variables
- Set up proper build scripts
- Test production build locally
- Monitor performance metrics
