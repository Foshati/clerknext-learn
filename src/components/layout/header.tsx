'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function Header() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push('/login');
  };

  return (
    <header className="flex justify-between p-5">
      <Link className="font-bold" href="/">Next-clerk</Link>
      <div>
        {session ? (
          <>
            <button onClick={handleSignOut} className="mr-2">Log Out</button>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </header>
  );
}
