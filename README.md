# Next.js Hello World

A simple, modern Hello World web application built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## ✨ Features

- **Next.js 14** with App Router
- **TypeScript** with strict mode enabled
- **Tailwind CSS** with design system tokens
- **shadcn/ui** components for consistent UI
- **Responsive design** with mobile-first approach
- **Modern React patterns** with hooks and server components
- **Accessibility** built-in with proper ARIA labels

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Package Manager**: pnpm (preferred) or npm
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with HTML structure
│   ├── page.tsx           # Home page component
│   └── globals.css        # Global styles and CSS variables
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   │   ├── button.tsx     # Button component
│   │   ├── card.tsx       # Card component
│   │   └── badge.tsx      # Badge component
│   └── hello-world.tsx    # Custom HelloWorld component
└── lib/                   # Utility functions
    └── utils.ts           # Common utilities and helpers
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd example-nextjs
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking

## 🎨 Design System

The application uses a comprehensive design system built with:

- **CSS Variables**: Consistent color palette and spacing
- **Tailwind Utilities**: Utility-first CSS approach
- **shadcn/ui Components**: Pre-built, accessible components
- **Responsive Grid**: Mobile-first responsive design
- **Typography**: Inter font with proper hierarchy

## 🔧 Configuration Files

- **`tsconfig.json`**: TypeScript configuration with strict mode
- **`tailwind.config.ts`**: Tailwind CSS with shadcn/ui design tokens
- **`postcss.config.mjs`**: PostCSS configuration for Tailwind
- **`next.config.mjs`**: Next.js configuration with optimizations
- **`.eslintrc.json`**: ESLint configuration for code quality

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Responsive grid layouts
- Flexible typography scaling
- Touch-friendly interactive elements

## ♿ Accessibility

Built with accessibility in mind:
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Focus management
- Color contrast compliance

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Radix UI](https://www.radix-ui.com/) - Accessible primitives

---

Built with ❤️ using modern web technologies
