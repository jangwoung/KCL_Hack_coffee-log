'use client';
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react';

// firebase
import { auth } from "../../api/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";




const Resister = () => {
  const [newUserName, setNewUserName] = useState("")
  const [newUserEmail, setNewUserEmail] = useState("")
  const [newUserPassword, setNewUserPassword] = useState("")

  const NewUserNameChange = (e:any) => setNewUserName(e.target.value);
  const newUserEmailChange = (e:any) => setNewUserEmail(e.target.value);
  const newUserPasswordChange = (e:any) => setNewUserPassword(e.target.value);

  const router = useRouter()

  const createWithEmail = () => {
    createUserWithEmailAndPassword(auth, newUserEmail, newUserPassword)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      router.push('/login')
      // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage, errorCode, errorMessage);
      });
    }

  return (
    <div className='py-28 w-[100vw] h-[100vh]'>
      <h1 className='w-[90vw] mx-[5vw] mb-8 text-lg font-semibold'>会員登録</h1>
      <div className='flex flex-col justify-center items-center'>
        
        {/* mail login */}
        <div className='mb-4'>
          <div className='flex flex-col justify-center items-center'>

            {/* New User Name */}
            <h3 className='w-72 font-semibold'>ユーザー名</h3>
            <input 
              type="text" 
              className='w-72 h-8 px-2 shadow-inner text-xs bg-zinc-100 mb-4 rounded-lg' 
              placeholder="豆太郎"
              onChange={NewUserNameChange}
            />

            {/* New User Id */}
            <h3 className='w-72 font-semibold'>Email</h3>
            <input 
              type="email" 
              className='w-72 h-8 px-2 shadow-inner text-xs bg-zinc-100 mb-4 rounded-lg' 
              placeholder="you@example.com"
              onChange={newUserEmailChange}
            />

            {/* New User Password */}
            <h3 className='w-72 font-semibold'>Password</h3>
            <input 
              type="text" 
              className='w-72 h-8 px-2 shadow-inner text-xs bg-zinc-100 mb-6 rounded-lg' 
              placeholder="*********"
              onChange={newUserPasswordChange}
            />
            <button 
              onClick={ () => createWithEmail() } 
              className='flex justify-center items-center w-72 h-8 mb-2 p-2 rounded-lg shadow-[0px_2px_12px_rgba(17,17,26,0.18)] font-rubik font-semibold'
            >
              <p className='text-sm'>登録</p>
            </button>
          </div>
        </div>

        {/* new resister */}
        <div>
          <Link href="/login" className='border-b-2 mb-16'>すでに会員の方はこちら</Link>
        </div>

      </div>
    </div>
  )
}

export default Resister
