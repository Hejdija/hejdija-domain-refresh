import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  featured?: boolean;
}

export const BlogCard = ({ 
  title, 
  description, 
  date, 
  readTime, 
  category, 
  image, 
  featured = false 
}: BlogCardProps) => {
  return (
    <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-1 bg-[var(--gradient-card)] ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      {image && (
        <div className="aspect-video overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
            {category}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {readTime}
            </div>
          </div>
        </div>
        
        <CardTitle className={`line-clamp-2 group-hover:text-primary transition-colors ${featured ? 'text-2xl' : 'text-lg'}`}>
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <CardDescription className={`line-clamp-3 ${featured ? 'text-base' : ''}`}>
          {description}
        </CardDescription>
        
        <Button variant="ghost" className="p-0 h-auto text-primary hover:bg-transparent group/btn">
          Read More
          <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
};