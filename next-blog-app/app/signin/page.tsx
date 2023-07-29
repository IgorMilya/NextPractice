import { Metadata } from 'next'
import GoogleButton from '@/components/GoogleButton'
import { SignInForm } from '@/components/SigninFrom'


export const metadata: Metadata = {
  title: 'About | Next App',
}

export default async function Signin() {

  return (
    <div>
      <h1>SignIn</h1>
      <GoogleButton />
      <div>or</div>
      <SignInForm />
    </div>
  )
}
