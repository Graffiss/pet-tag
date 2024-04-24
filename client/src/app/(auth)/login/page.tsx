import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import { UserLoginForm } from "@/components/forms/login.form";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your existing Pet-TAG account",
};

export default function LoginPage() {
  return (
    <>
      <Link
        href="/register"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}>
        Register
      </Link>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Log in</h1>
            <p className="text-sm text-muted-foreground">
              Log in or register a new Pet-TAG user.
            </p>
          </div>
          <UserLoginForm />
        </div>
      </div>
    </>
  );
}
