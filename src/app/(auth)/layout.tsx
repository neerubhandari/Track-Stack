"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();
  const isSignInPage = pathname === "/sign-in";

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex items-center justify-between ">
          <Image
            src="/logo.png"
            alt="Logo"
            width={194}
            height={66}
            className="h-10 w-auto"
          />

          <Button asChild variant={"secondary"}>
            <Link href={isSignInPage ? "/sign-up" : "/sign-in"}>
              {isSignInPage ? "Sign Up" : "Login"}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-colitems-center justify-center pt-4 md:pt-40">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
