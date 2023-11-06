'use client'
import { NextPage } from 'next'
import { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'


const Header = () => {
  const [menu, setMenu] = useState(false)

  const menuState = () => {
    setMenu(!menu);
  }

  return (
    <div className='fixed w-screen bg-white shadow-md'>

      {/* title */}
      <div className='flex items-center justify-between mx-4 pt-4 pb-2 z-100'>
        <div>
          <h1 className='text-5xl font-slacksideOne font-bold text-[#603620]'>まめろぐ</h1>
          <h2 className='text-xs font-semibold font-rubik mt-1'>コーヒーをよりおいしく楽しもう</h2>
        </div>
      </div>
      
      {/* menu bar */}
      <div className='absolute z-50 top-8 right-4 w-10 h-4 flex flex-col justify-between' onClick={menuState}>
          <p className={`w-10 h-1 bg-[#9B3C28] rounded-sm transition ease-in-out delay-100 duration-300 ${menu ? 'rotate-45 translate-y-[0.375rem]' : 'rotate-0'}`}></p>
          <p className={`w-10 h-1 bg-[#9B3C28] rounded-sm transition ease-in-out delay-100 duration-300 ${menu ? 'rotate-[-45deg] translate-y-[-0.375rem]' : 'rotate-0'}`}></p>
      </div>

      {/* menu contents */}
      <div className={`absolute top-[-100vh] z-40 h-screen w-screen bg-white flex items-center transition ease-in-out delay-800 duration-300 ${menu ? 'opacity-100 translate-y-[100vh]' : 'opacity-40'}`}>
        <ul className='h-[40vh] w-[90vw] mx-[5vw] opacity-100 text-center text-xl font-rubik font-semibold flex flex-col justify-between items-center'>
          <li>
            <Link href="/">お知らせ</Link>
          </li>
          <li>マイページ</li>
          <li>お問い合わせ</li>
          <li>設定</li>
          <p className='mt-10 text-[#603620]'>Coffee Log</p>
        </ul>
      </div>

      {/* bottom contents */}
      <div className='fixed z-0 bottom-0'>
        <div className='w-screen h-16 py-1 bg-[#F1DAAE]'>
          <ul className='flex justify-around mt-2 text-center text-sm font-semibold text-[#412312]'>
            <li className='w-[16vw]'>
              <Link href={'/'} className='flex flex-col justify-center items-center'>
                <svg className='w-8 fill-[#412312]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                </svg>
                <h1>ホーム</h1>
              </Link>
            </li>
            <li className='w-[16vw]'>
              <Link href={'/search'}  className='flex flex-col justify-center items-center'>
                <svg className='w-8 fill-[#412312]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
                </svg>
                <h1>探す</h1>
              </Link>
            </li>
            <li className='w-[16vw]'>
              <Link href={'/record'} className='flex flex-col justify-center items-center'>
              <svg className='w-8 fill-[#412312]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>
              </svg>
                <h1>記録</h1>
              </Link>
            </li>
            <li className='w-[16vw]'>
              <Link href={'/shop'} className='flex flex-col justify-center items-center'>
              <svg className='w-8 fill-[#412312]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0H109.6C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9l-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3V384v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V384 252.6c-4 1-8 1.8-12.3 2.3z"/>
              </svg>
                <h1>ショップ</h1>
              </Link>
            </li>
            <li className='w-[16vw]'>
              <Link href={'/mypage'} className='flex flex-col justify-center items-center'>
              <svg className='w-8 fill-[#412312]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/>
              </svg>
                <h1>マイページ</h1>
              </Link>
            </li>
          </ul>
          
        </div>
      </div>

    </div>
  )
}

export default Header