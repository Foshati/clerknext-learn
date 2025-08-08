/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client'
import { authClient } from '@/lib/auth-client'
import Image from 'next/image'

export default function Page() {
  interface UserInterface {
    tokens: number
  }
  
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

  const formatDate = (date: string | Date | null | undefined): string => {
    if (!date) return 'Not available'
    try {
      return new Date(date).toLocaleDateString()
    } catch {
      return 'Invalid date'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-xl rounded-lg">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8">
            <div className="flex items-center space-x-4">
              {session?.user?.image && (
                <div className="relative w-24 h-24">
                  <Image
                    src={session.user.image}
                    alt="Profile"
                    fill
                    className="rounded-full border-4 border-white shadow-lg object-cover"
                    sizes="96px"
                  />
                </div>
              )}
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Welcome, {session?.user?.name || 'User'}!
                </h1>
                <p className="text-blue-100 text-lg">User Information Dashboard</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  Personal Information
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-600">Name:</span>
                    <span className="text-gray-800">{session?.user?.name || 'Not provided'}</span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Contact Information
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-600">Email:</span>
                    <span className="text-gray-800 text-sm">
                      {session?.user?.email || 'No email provided'}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-600">Email Verified:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        session?.user?.emailVerified 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                      }`}>
                      {session?.user?.emailVerified ? 'Verified' : 'Not Verified'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Account Details */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Account Details
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-600">User ID:</span>
                    <span className="text-gray-800 text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                      {session?.user?.id}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-600">Account Created:</span>
                    <span className="text-gray-800">
                      {formatDate(session?.user?.createdAt)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-600">Last Updated:</span>
                    <span className="text-gray-800">
                      {formatDate(session?.user?.updatedAt)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Profile Picture */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Profile Picture
                </h2>
                <div className="flex flex-col items-center space-y-4">
                  {session?.user?.image ? (
                    <div className="relative w-32 h-32">
                      <Image
                        src={session.user.image}
                        alt="Profile"
                        fill
                        className="rounded-full border-4 border-gray-200 shadow-lg object-cover"
                        sizes="128px"
                      />
                    </div>
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center">
                      <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                  )}
                  <p className="text-sm text-gray-600 text-center">
                    {session?.user?.image ? 'Profile picture loaded' : 'No profile picture set'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}