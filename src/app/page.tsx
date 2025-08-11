import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HelloWorld } from '@/components/hello-world';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Welcome to Next.js Hello World
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A simple, modern web application built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              Next.js 14
            </CardTitle>
            <CardDescription>
              Built with the latest App Router and React Server Components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary" className="mb-3">Framework</Badge>
            <p className="text-sm text-muted-foreground">
              Modern React framework with file-based routing and built-in optimizations.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              TypeScript
            </CardTitle>
            <CardDescription>
              Full type safety and enhanced developer experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary" className="mb-3">Language</Badge>
            <p className="text-sm text-muted-foreground">
              Strict TypeScript configuration with proper type definitions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              Tailwind CSS
            </CardTitle>
            <CardDescription>
              Utility-first CSS framework for rapid UI development
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary" className="mb-3">Styling</Badge>
            <p className="text-sm text-muted-foreground">
              Modern CSS with design system tokens and responsive utilities.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <HelloWorld />
      </div>

      <div className="mt-8 text-center">
        <Button size="lg" className="mr-4">
          Get Started
        </Button>
        <Button variant="outline" size="lg">
          Learn More
        </Button>
      </div>
    </div>
  );
}
