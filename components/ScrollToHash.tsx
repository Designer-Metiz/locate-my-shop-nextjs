"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const NAV_OFFSET_PX = 96; // accommodate fixed navbar height

const ScrollToHash = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Use requestAnimationFrame to batch DOM reads and avoid forced reflow
    const scrollToHash = () => {
      const hash = typeof window !== 'undefined' ? window.location.hash : '';
      if (hash) {
        const id = hash.replace(/^#/, "");
        const el = document.getElementById(id);
        if (el) {
          // Use requestAnimationFrame to batch the layout read
          requestAnimationFrame(() => {
            // Batch all DOM reads together to avoid forced reflow
            const rect = el.getBoundingClientRect();
            const scrollY = window.pageYOffset || window.scrollY || 0;
            const y = rect.top + scrollY - NAV_OFFSET_PX;
            
            // Use requestAnimationFrame again for the write operation
            requestAnimationFrame(() => {
              window.scrollTo({ top: y, behavior: "smooth" });
            });
          });
        }
      }
    };

    // Give route a tick to mount, then use RAF to avoid forced reflow
    const timer = setTimeout(() => {
      requestAnimationFrame(scrollToHash);
    }, 100); // Slightly longer delay to ensure DOM is ready

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToHash;


