import { SignIn } from '@clerk/nextjs'


export default function page() {
  return (
    <div className='flex justify-center items-center h-screen mx-auto'>
        <SignIn/>
    </div>
  )
}