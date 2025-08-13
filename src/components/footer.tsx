import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#f5f5dc] text-gray-800 py-6 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left side - Policy links */}
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="hover:text-orange-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-orange-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-orange-600 transition-colors">
              Contact
            </Link>
            <Link href="/sitemap" className="hover:text-orange-600 transition-colors">
              Sitemap
            </Link>
          </div>
          
          {/* Right side - Copyright */}
          <div className="text-sm">
            © 2025 Toolboard.net - All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
