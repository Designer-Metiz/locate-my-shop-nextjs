import { Loader2 } from "lucide-react";

interface PageLoaderProps {
  message?: string;
}

export function PageLoader({ message = "Loading..." }: PageLoaderProps) {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Loader2 className="w-6 h-6 animate-spin" />
        <span>{message}</span>
      </div>
    </div>
  );
}


