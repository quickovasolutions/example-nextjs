import { Tool } from '@/components/tool-card';

export const tools: Tool[] = [
  {
    id: '1',
    name: 'Image Resizer',
    description: 'Resize images to any dimension while maintaining quality. Support for JPG, PNG, and WebP formats.',
    category: 'Image',
    icon: null, // Will be set by the component
    color: 'bg-blue-500'
  },
  {
    id: '2',
    name: 'PNG to JPG',
    description: 'Convert PNG images to JPG format with customizable quality settings and background options.',
    category: 'Image',
    icon: null,
    color: 'bg-green-500'
  },
  {
    id: '3',
    name: 'Video Downloader',
    description: 'Download videos from various platforms with multiple quality options and format support.',
    category: 'Video',
    icon: null,
    color: 'bg-purple-500'
  },
  {
    id: '4',
    name: 'Time Zone Calculator',
    description: 'Convert times between different time zones with daylight saving time support.',
    category: 'Utility',
    icon: null,
    color: 'bg-orange-500'
  },
  {
    id: '5',
    name: 'PDF Compressor',
    description: 'Reduce PDF file sizes while maintaining quality for easy sharing and storage.',
    category: 'Document',
    icon: null,
    color: 'bg-red-500'
  },
  {
    id: '6',
    name: 'QR Code Generator',
    description: 'Create custom QR codes for URLs, text, or contact information with styling options.',
    category: 'Utility',
    icon: null,
    color: 'bg-indigo-500'
  },
  {
    id: '7',
    name: 'Color Palette Generator',
    description: 'Generate beautiful color palettes with complementary and analogous color schemes.',
    category: 'Design',
    icon: null,
    color: 'bg-pink-500'
  },
  {
    id: '8',
    name: 'Text to Speech',
    description: 'Convert text to natural-sounding speech with multiple voice options and languages.',
    category: 'Audio',
    icon: null,
    color: 'bg-teal-500'
  }
];

export const categories = ['All', 'Image', 'Video', 'Document', 'Utility', 'Design', 'Audio'];
