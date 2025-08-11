'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';

/**
 * HelloWorld component that demonstrates the tech stack
 * Shows interactive features and proper TypeScript usage
 */
export function HelloWorld() {
  const [count, setCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  const updateTime = () => {
    setCurrentTime(new Date());
  };

  const incrementCount = () => {
    setCount(prev => prev + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl">
          <span className="text-4xl mr-2">👋</span>
          Hello World!
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">
            This component demonstrates:
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            <Badge variant="secondary">React Hooks</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">State Management</Badge>
            <Badge variant="secondary">shadcn/ui</Badge>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <span className="text-sm font-medium">Counter:</span>
            <span className="text-2xl font-bold text-primary">{count}</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <span className="text-sm font-medium">Current Time:</span>
            <span className="text-sm font-mono">{formatDate(currentTime)}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={incrementCount} className="flex-1">
            Increment
          </Button>
          <Button onClick={resetCount} variant="outline" className="flex-1">
            Reset
          </Button>
        </div>

        <Button onClick={updateTime} variant="secondary" className="w-full">
          Update Time
        </Button>
      </CardContent>
    </Card>
  );
}
