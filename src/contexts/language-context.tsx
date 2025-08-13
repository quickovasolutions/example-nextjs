'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';

export type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// English translations
const enMessages: Record<string, string> = {
  // Header
  'header.title': 'Tool Board',
  'header.login': 'Login',
  'header.signUp': 'Sign Up',
  'header.language': 'Language',
  
  // Hero
  'hero.title': 'Free Online Tools Ready When You Are',
  'hero.subtitle': 'Professional-grade tools, completely free. No sign-ups required. Just open your browser and get things done instantly.',
  
  // Search
  'search.placeholder': 'Search tools...',
  'search.results': 'Found {count} tool{plural} for "{query}"',
  
  // Categories
  'categories.all': 'All',
  'categories.image': 'Image',
  'categories.video': 'Video',
  'categories.document': 'Document',
  'categories.utility': 'Utility',
  'categories.design': 'Design',
  'categories.audio': 'Audio',
  
  // Tools
  'tools.useTool': 'Use Tool',
  'tools.noResults': 'No tools found',
  'tools.noResultsDescription': 'Try adjusting your search or category filter',
  'tools.clearFilters': 'Clear Filters',
  
  // Stats
  'stats.availableTools': 'Available Tools',
  'stats.free': 'Free',
  'stats.noCost': 'No Cost to Use',
  'stats.alwaysAvailable': 'Always Available',
  
  // Tool names
  'toolNames.imageResizer': 'Image Resizer',
  'toolNames.pngToJpg': 'PNG to JPG',
  'toolNames.videoDownloader': 'Video Downloader',
  'toolNames.timeZoneCalculator': 'Time Zone Calculator',
  'toolNames.pdfCompressor': 'PDF Compressor',
  'toolNames.qrCodeGenerator': 'QR Code Generator',
  'toolNames.colorPaletteGenerator': 'Color Palette Generator',
  'toolNames.textToSpeech': 'Text to Speech',
  
  // Tool descriptions
  'toolDescriptions.imageResizer': 'Resize images to any dimension while maintaining quality. Support for JPG, PNG, and WebP formats.',
  'toolDescriptions.pngToJpg': 'Convert PNG images to JPG format with customizable quality settings and background options.',
  'toolDescriptions.videoDownloader': 'Download videos from various platforms with multiple quality options and format support.',
  'toolDescriptions.timeZoneCalculator': 'Convert times between different time zones with daylight saving time support.',
  'toolDescriptions.pdfCompressor': 'Reduce PDF file sizes while maintaining quality for easy sharing and storage.',
  'toolDescriptions.qrCodeGenerator': 'Create custom QR codes for URLs, text, or contact information with styling options.',
  'toolDescriptions.colorPaletteGenerator': 'Generate beautiful color palettes with complementary and analogous color schemes.',
  'toolDescriptions.textToSpeech': 'Convert text to natural-sounding speech with multiple voice options and languages.',
};

// Chinese translations
const zhMessages: Record<string, string> = {
  // Header
  'header.title': '工具板',
  'header.login': '登录',
  'header.signUp': '注册',
  'header.language': '语言',
  
  // Hero
  'hero.title': '免费在线工具，随时为您服务',
  'hero.subtitle': '专业级工具，完全免费。无需注册。只需打开浏览器即可立即完成工作。',
  
  // Search
  'search.placeholder': '搜索工具...',
  'search.results': '找到 {count} 个工具，搜索词："{query}"',
  
  // Categories
  'categories.all': '全部',
  'categories.image': '图像',
  'categories.video': '视频',
  'categories.document': '文档',
  'categories.utility': '实用工具',
  'categories.design': '设计',
  'categories.audio': '音频',
  
  // Tools
  'tools.useTool': '使用工具',
  'tools.noResults': '未找到工具',
  'tools.noResultsDescription': '请尝试调整搜索或类别筛选',
  'tools.clearFilters': '清除筛选',
  
  // Stats
  'stats.availableTools': '可用工具',
  'stats.free': '免费',
  'stats.noCost': '无需付费',
  'stats.alwaysAvailable': '随时可用',
  
  // Tool names
  'toolNames.imageResizer': '图像调整器',
  'toolNames.pngToJpg': 'PNG转JPG',
  'toolNames.videoDownloader': '视频下载器',
  'toolNames.timeZoneCalculator': '时区计算器',
  'toolNames.pdfCompressor': 'PDF压缩器',
  'toolNames.qrCodeGenerator': '二维码生成器',
  'toolNames.colorPaletteGenerator': '调色板生成器',
  'toolNames.textToSpeech': '文字转语音',
  
  // Tool descriptions
  'toolDescriptions.imageResizer': '调整图像到任何尺寸，同时保持质量。支持JPG、PNG和WebP格式。',
  'toolDescriptions.pngToJpg': '将PNG图像转换为JPG格式，具有可自定义的质量设置和背景选项。',
  'toolDescriptions.videoDownloader': '从各种平台下载视频，具有多种质量选项和格式支持。',
  'toolDescriptions.timeZoneCalculator': '在不同时区之间转换时间，支持夏令时。',
  'toolDescriptions.pdfCompressor': '减少PDF文件大小，同时保持质量，便于分享和存储。',
  'toolDescriptions.qrCodeGenerator': '为URL、文本或联系信息创建自定义二维码，具有样式选项。',
  'toolDescriptions.colorPaletteGenerator': '生成美丽的调色板，具有互补和类似配色方案。',
  'toolDescriptions.textToSpeech': '将文本转换为自然语音，具有多种语音选项和语言。',
};

const messages = { en: enMessages, zh: zhMessages };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Get language from cookie on mount
    const savedLanguage = Cookies.get('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    // Save to cookie
    Cookies.set('language', lang, { expires: 365 }); // Expires in 1 year
  };

  const t = (key: string): string => {
    return messages[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
