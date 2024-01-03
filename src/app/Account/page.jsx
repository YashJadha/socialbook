'use client'

import {useSession} from 'next-auth/react'
import  {signOut}  from 'next-auth/react'
import { useRouter } from 'next/navigation';

export default function Personalpage() {

  const router = useRouter();
  const session = useSession();

  if(session.status === "unauthenticated"){
     router.push('/');
  }
    return (
    <div>
      <h1>Personal account</h1>

      <button onClick={() => signOut('google')}>
        Click here for sign out
      </button>
    </div>
  )
}
