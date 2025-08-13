import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Download, Image, Clock, Globe, Video } from 'lucide-react';

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
  };
  
  return colorMap[toolName] || 'bg-gray-500';
};

export function ToolCard({ tool, onToolClick }: ToolCardProps) {
  const icon = getToolIcon(tool.name);
  const color = getToolColor(tool.name);

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer group">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center text-white`}>
            {icon}
          </div>
          <Badge variant="secondary" className="text-xs">
            {tool.category}
          </Badge>
        </div>
        <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
          {tool.name}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {tool.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Button 
          onClick={() => onToolClick(tool)}
          className="w-full"
          size="sm"
        >
          Use Tool
        </Button>
      </CardContent>
    </Card>
  );
}
