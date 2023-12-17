'use client';
import { NextPage } from 'next'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import googleLogo from '../../images/googleg_standard_color.png'

// firebase
import { signInWithRedirect, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../../api/firebase";

interface Props {
}

const Login = () => {
  const [UserEmail, setUserEmail] = useState("")
  const [UserPassword, setUserPassword] = useState("")

  const userEmailChange = (e:any) => setUserEmail(e.target.value);
  const userPasswordChange = (e:any) => setUserPassword(e.target.value);
  
  const router = useRouter()

  onAuthStateChanged(auth, (user) => {
    (user !== null) && router.push("/mypage")
  });

  // email login
  const logInWithEmail = () => {
    signInWithEmailAndPassword(auth, UserEmail, UserPassword)
    .then(() => {
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage, errorCode, errorMessage)
    });
  };

  //google login
  const logInWithGoogle = () => {
    signInWithRedirect(auth, provider)
    .then((result) => {
      localStorage.setItem("isAuth", "true");
      router.push('/')
    })
  };


  return (
    <div className='py-28 w-[100vw] h-[100vh]'>
      <h1 className='w-[90vw] mx-[5vw] mb-8 text-lg font-semibold'>ログイン</h1>
      <div className='flex flex-col justify-center items-center'>
        
        {/* mail login */}
        <div className='mb-4'>
          <form action="" className='flex flex-col justify-center items-center'>
            <h3 className='w-72 font-semibold'>Email</h3>
            <input 
              type="email" 
              className='w-72 h-8 px-2 shadow-inner text-xs bg-zinc-100 mb-4 rounded-lg' 
              placeholder="you@example.com"
              onChange={userEmailChange}
            />

            <h3 className='w-72 font-semibold'>Password</h3>
            <input 
              type="password"
              className='w-72 h-8 px-2 shadow-inner text-xs bg-zinc-100 mb-6 rounded-lg' 
              placeholder="*********"
              onChange={userPasswordChange}
            />

            <button 
              onClick={ () => logInWithEmail() } 
              className='flex justify-center items-center w-72 h-8 mb-2 p-2 rounded-lg shadow-[0px_2px_12px_rgba(17,17,26,0.18)] font-rubik font-semibold'>
                <p className='text-sm'>ログイン</p>
            </button>
          </form>
        </div>

        {/* new resister */}
        <div>
          <Link href="/resister" className='border-b-2 mb-16'>会員登録はこちらから</Link>
        </div>

        {/* login with google */}
        <button 
          onClick={ () => logInWithGoogle() } 
          className='flex justify-center items-center w-72 h-8 p-2 mt-16 rounded-lg shadow-[0px_2px_12px_rgba(17,17,26,0.18)] font-rubik font-semibold'>
            <Image src= { googleLogo }
              width={16}
              height={16}
              alt="Picture of the author"
              className='z-[10]'
            />
            <p className='ml-4'>Googleでログイン</p>
        </button>

      </div>
    </div>
  )
}

export default Login
