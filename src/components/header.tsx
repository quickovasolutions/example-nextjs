import { Button } from '@/components/ui/button';

interface HeaderProps {
  // Removed search props since search is now in main content
}

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TB</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Tool Board</h1>
          </div>

          {/* Language Switcher and Auth Buttons */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher Placeholder */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Language:</span>
              <div className="flex space-x-1">
                <button className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded border border-blue-200 hover:bg-blue-100 transition-colors">
                  EN
                </button>
                <button className="px-2 py-1 text-xs font-medium text-gray-500 bg-gray-50 rounded border border-gray-200 hover:bg-gray-100 transition-colors">
                  CN
                </button>
                <button className="px-2 py-1 text-xs font-medium text-gray-500 bg-gray-50 rounded border border-gray-200 hover:bg-gray-100 transition-colors">
                  ES
                </button>
              </div>
            </div>
            
            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                Login
              </Button>
              <Button size="sm">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
