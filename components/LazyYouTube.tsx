"use client";
import { useState, useRef, useEffect } from "react";

interface LazyYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
}

const LazyYouTube = ({ videoId, title, className = "" }: LazyYouTubeProps) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            // Delay loading YouTube scripts until user is about to see it
            setTimeout(() => {
              setShouldLoad(true);
            }, 200);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "100px", // Start loading 100px before it comes into view
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {!shouldLoad ? (
        <div className="w-full aspect-video rounded-lg shadow-lg bg-muted/50 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-sm text-muted-foreground">Click to load video</p>
            <button
              onClick={() => setShouldLoad(true)}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              Load Video
            </button>
          </div>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          className="w-full aspect-video rounded-lg shadow-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
};

export default LazyYouTube;

