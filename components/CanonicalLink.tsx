"use client";
import Head from "next/head";
import { usePathname } from "next/navigation";

export default function CanonicalLink() {
  const pathname = usePathname() || "/";
  const href = `https://storelocator.in${pathname}`;
  return (
    <Head>
      <link rel="canonical" href={href} />
    </Head>
  );
}


