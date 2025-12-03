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
      if (!hash) return;
      
      const id = hash.replace(/^#/, "");
      if (!id) return;
      
      // Batch all DOM operations in a single frame to avoid forced reflow
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (!el) return;
        
        // Batch all reads together before any writes
        const rect = el.getBoundingClientRect();
        const scrollY = window.pageYOffset || window.scrollY || 0;
        const y = rect.top + scrollY - NAV_OFFSET_PX;
        
        // Write in next frame after all reads are complete
        requestAnimationFrame(() => {
          window.scrollTo({ top: y, behavior: "smooth" });
        });
      });
    };

    // Wait for DOM to be ready, then use RAF to avoid forced reflow
    // Increased delay slightly to ensure all layout is complete
    const timer = setTimeout(() => {
      if (document.readyState === 'complete') {
        requestAnimationFrame(scrollToHash);
      } else {
        window.addEventListener('load', () => {
          requestAnimationFrame(scrollToHash);
        }, { once: true });
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToHash;


