"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const NAV_OFFSET_PX = 96; // accommodate fixed navbar height

const ScrollToHash = () => {
  const pathname = usePathname();

  useEffect(() => {
    // give route a tick to mount
    const timer = setTimeout(() => {
      const hash = typeof window !== 'undefined' ? window.location.hash : '';
      if (hash) {
        const id = hash.replace(/^#/, "");
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET_PX;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToHash;


