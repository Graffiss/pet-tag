"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function MainNav({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="container flex h-14 max-w-screen-2xl items-center">
      <div className="mr-4 hidden md:flex">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="hidden font-bold sm:inline-block text-orange-500">
            Pet-TAG
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <Link
            href="/qr-code"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/docs" ? "text-foreground" : "text-foreground/60"
            )}>
            QR Code
          </Link>
          <Link
            href="/missing"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/missing")
                ? "text-foreground"
                : "text-foreground/60"
            )}>
            Missing pets
          </Link>
        </nav>
      </div>
      <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
        {children}
      </div>
    </div>
  );
}
