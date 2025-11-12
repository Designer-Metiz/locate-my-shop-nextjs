import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, X } from "lucide-react";

interface BlogFiltersProps {
  categories: string[];
  tags: string[];
  selectedCategory: string;
  selectedTags: string[];
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onTagToggle: (tag: string) => void;
  onSearchChange: (query: string) => void;
  onClearFilters: () => void;
}

const BlogFilters = ({
  categories,
  tags,
  selectedCategory,
  selectedTags,
  searchQuery,
  onCategoryChange,
  onTagToggle,
  onSearchChange,
  onClearFilters
}: BlogFiltersProps) => {
  const [showFilters, setShowFilters] = useState(false);

  const hasActiveFilters = selectedCategory || selectedTags.length > 0 || searchQuery;

  return (
    <Card className="gradient-card border-0 shadow-card mb-8">
      <CardContent className="p-6">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search articles, categories, or tags..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary"
          />
        </div>

        {/* Filter Toggle */}
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <Badge variant="secondary" className="ml-2 px-2 py-0 text-xs">
                {[selectedCategory, ...selectedTags].filter(Boolean).length}
              </Badge>
            )}
          </Button>

          {hasActiveFilters && (
            <Button
              variant="ghost"
              onClick={onClearFilters}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
              Clear All
            </Button>
          )}
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedCategory && (
              <Badge
                variant="secondary"
                className="flex items-center gap-1 cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                onClick={() => onCategoryChange("")}
              >
                Category: {selectedCategory}
                <X className="w-3 h-3" />
              </Badge>
            )}
            {selectedTags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="flex items-center gap-1 cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                onClick={() => onTagToggle(tag)}
              >
                {tag}
                <X className="w-3 h-3" />
              </Badge>
            ))}
          </div>
        )}

        {/* Filter Options */}
        {showFilters && (
          <div className="space-y-6 pt-4 border-t border-border/50">
            {/* Categories */}
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Categories</h4>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === "" ? "default" : "outline"}
                  size="sm"
                  onClick={() => onCategoryChange("")}
                  className="rounded-full"
                >
                  All
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => onCategoryChange(category)}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => onTagToggle(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BlogFilters;