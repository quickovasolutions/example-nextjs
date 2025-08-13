'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Download, Image, Clock, Globe, Video } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  color: string;
}

interface ToolCardProps {
  tool: Tool;
  onToolClick: (tool: Tool) => void;
}

const getToolIcon = (toolName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    'Image Resizer': <Image className="w-5 h-5" aria-label="Image tool icon" />,
    'PNG to JPG': <Image className="w-5 h-5" aria-label="Image tool icon" />,
    'Video Downloader': <Video className="w-5 h-5" aria-label="Video tool icon" />,
    'Time Zone Calculator': <Clock className="w-5 h-5" aria-label="Time tool icon" />,
  };
  
  return iconMap[toolName] || <Search className="w-5 h-5" aria-label="Search tool icon" />;
};

const getToolColor = (toolName: string) => {
  const colorMap: Record<string, string> = {
    'Image Resizer': 'bg-blue-500',
    'PNG to JPG': 'bg-green-500',
    'Video Downloader': 'bg-purple-500',
    'Time Zone Calculator': 'bg-orange-500',
    'PDF Compressor': 'bg-red-500',
    'QR Code Generator': 'bg-indigo-500',
    'Color Palette Generator': 'bg-pink-500',
    'Text to Speech': 'bg-teal-500',
  };
  
  return colorMap[toolName] || 'bg-gray-500';
};

export function ToolCard({ tool, onToolClick }: ToolCardProps) {
  const { t } = useLanguage();
  const icon = getToolIcon(tool.name);
  const color = getToolColor(tool.name);

  const getCategoryLabel = (category: string) => {
    if (category === 'All') return t('categories.all');
    return t(`categories.${category.toLowerCase()}`);
  };

  const getToolName = (name: string) => {
    const toolNameMap: Record<string, string> = {
      'Image Resizer': 'toolNames.imageResizer',
      'PNG to JPG': 'toolNames.pngToJpg',
      'Video Downloader': 'toolNames.videoDownloader',
      'Time Zone Calculator': 'toolNames.timeZoneCalculator',
      'PDF Compressor': 'toolNames.pdfCompressor',
      'QR Code Generator': 'toolNames.qrCodeGenerator',
      'Color Palette Generator': 'toolNames.colorPaletteGenerator',
      'Text to Speech': 'toolNames.textToSpeech',
    };
    return t(toolNameMap[name] || name);
  };

  const getToolDescription = (name: string) => {
    const toolDescMap: Record<string, string> = {
      'Image Resizer': 'toolDescriptions.imageResizer',
      'PNG to JPG': 'toolDescriptions.pngToJpg',
      'Video Downloader': 'toolDescriptions.videoDownloader',
      'Time Zone Calculator': 'toolDescriptions.timeZoneCalculator',
      'PDF Compressor': 'toolDescriptions.pdfCompressor',
      'QR Code Generator': 'toolDescriptions.qrCodeGenerator',
      'Color Palette Generator': 'toolDescriptions.colorPaletteGenerator',
      'Text to Speech': 'toolDescriptions.textToSpeech',
    };
    return t(toolDescMap[name] || name);
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer group flex flex-col h-full">
      <CardHeader className="pb-3 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center text-white`}>
            {icon}
          </div>
          <Badge variant="secondary" className="text-xs">
            {getCategoryLabel(tool.category)}
          </Badge>
        </div>
        <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
          {getToolName(tool.name)}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground h-16 overflow-hidden">
          {getToolDescription(tool.name)}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4 mt-auto">
        <Button 
          onClick={() => onToolClick(tool)}
          className="w-full"
          size="sm"
        >
          {t('tools.useTool')}
        </Button>
      </CardContent>
    </Card>
  );
}
