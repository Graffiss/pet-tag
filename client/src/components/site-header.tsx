"use client";

import { MainNav } from "./nav/main-nav";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <MainNav />
    </header>
  );
};

export default SiteHeader;
