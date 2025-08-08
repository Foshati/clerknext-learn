
'use client'
import { authClient } from '@/lib/auth-client'

export default function Page() {


  const { data: session, isPending } = authClient.useSession();

  // Loading state
  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  // Not signed in state
  if (!session?.user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Please Sign In</h2>
          <p className="text-gray-600">You need to be signed in to view this page.</p>
        </div>
      </div>
    )
  }


  return (
    <p>home page</p>
  )
}