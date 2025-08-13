'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function ForgotPasswordPage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password reset requested for:', email);
    // Placeholder for password reset functionality
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home Link */}
        <div className="mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('auth.backToHome')}
          </Link>
        </div>

        {/* Forgot Password Card */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-white font-bold text-2xl">TB</span>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              {t('auth.forgotPasswordTitle')}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {t('auth.forgotPasswordDescription')}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Reset Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  {t('auth.emailAddress')}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('auth.enterEmail')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                {t('auth.sendResetLink')}
              </Button>
            </form>

            {/* Back to Login Link */}
            <div className="text-center pt-4">
              <p className="text-sm text-gray-600">
                {t('auth.rememberPassword')}{' '}
                <Link 
                  href="/login" 
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  {t('auth.signIn')}
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            {t('auth.termsAgreement')}
          </p>
        </div>
      </div>
    </div>
  );
}
