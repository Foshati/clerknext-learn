import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SignupForm } from "@/components/form/signup-form";

export default function SignupPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <Link href="/" className="absolute top-5 left-5">
        <Button variant="ghost">
          <ChevronLeft />
          back
        </Button>
      </Link>

      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
      FA
          </div>
          
        </Link>
        <SignupForm />
      </div>
    </div>
  );
}