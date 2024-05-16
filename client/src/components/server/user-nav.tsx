import { auth, signOut } from "@/app/(auth)/auth";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export async function UserNav() {
  const session = await auth();
  const user = session?.user;

  return user ? (
    <>
      <Link href="/profile" className="flex items-center space-x-2">
        <span className="text-foreground/80">Hello {user.name}</span>
      </Link>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}>
        <Button variant="secondary">Logout</Button>
      </form>
    </>
  ) : (
    <Link
      href="/login"
      className={cn(
        "transition-colors hover:text-foreground/80",
        "text-foreground"
      )}>
      Login
    </Link>
  );
}
