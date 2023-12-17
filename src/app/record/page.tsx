'use client'
import { NextPage } from 'next'
import Image from 'next/image'
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation'

// import firebase
import { auth, db } from "../../api/firebase";
import { doc, setDoc } from "firebase/firestore"; 

// import img
import CoffeeCup from "../../images/coffee-cup.png";

interface Props {

}

const Record = () => {
  const [shopName, setShopName] = useState("")
  const [beansName, setBeansName] = useState("")
  const [Roasting, setRoasting] = useState(0) 
  const [bitter, setBitter] = useState(3)
  const [sour, setSour] = useState(3)
  const [body, setBody] = useState(3)

  const [userId, setUserId] = useState("")
  
  const router = useRouter()

  useEffect(() => {
    const user = auth.currentUser;
    user !== null && setUserId(user.uid);
  }, [])
  
  const handleClick = async() => {
    !(shopName == "" || beansName == "") && 
      console.log(userId, shopName, beansName, Roasting, bitter, sour, body)
      await setDoc(doc(db, userId, shopName), {
        beansName: beansName,
        Roasting: Roasting,
        bitter: bitter,
        sour: sour,
        body: body,
      });
      router.push("/mypage")
  }

  return (
    <div className='py-28 w-[100vw] font-rounded'>
      <h1 className='w-[90vw] mx-[5vw] mb-8 text-lg font-semibold'>コーヒーの記録</h1>

      {/* shop info */}
      <div className='flex justify-center items-center w-screen h-[90vh] bg-[#DFC492] shadow-top'>
        <div className='flex flex-col items-center w-[90vw] h-[80vh] mt-[8vh] bg-white'>
          <Image src={CoffeeCup} alt='coffee_cup_img' width={64} height={64} className='mt-20 mb-16' />

          {/* input shop name */}
          <div>
            <form action="">
              <input type="text" placeholder='ショップ名' className='text-center text-2xl font-semibold w-[64vw] border-b-2 outline-none duration-200 focus:border-amber-600' onChange={(e) => setShopName(e.target.value)}/>
              <p className='text-center font-rubik font-bold text-sm'>COFFEE-SHOP-NAME</p>
            </form>
          </div>

          {/* input coffee name */}
          <div className='mt-20'>
            <form action="" className='flex items-center'>
              <div className='w-[20vw] h-[4vh] font-rubik font-bold text-sm border-r-2 border-black'>
                <p className='h-[2vh]'>COFFEE</p>
                <p className='h-[2vh]'>NAME</p>
              </div>
              <input type="text" placeholder='商品名' className='ml-2 text-xl text-center font-semibold w-[40vw] h-[4vh] outline-none duration-200 border-b-2 border-white focus:border-amber-600' onChange={(e) => setBeansName(e.target.value)}/>
            </form>
          </div>

          {/* Roasting degree */}
          <div className='w-[64vw] mt-4 pt-4 border-t-2 border-black font-semibold'>
            <ul className='flex justify-center items-center mt-4 text-xs'>

              {/* Light */}
              <li className='flex flex-col items-center text-center w-[12vw] mx-[2vw]' onClick={() => Roasting==1 ? setRoasting(0) : setRoasting(1)}>
                <svg className={`transition ease-in-out duration-[500ms] rounded-[50%] ${Roasting==0 || Roasting==1 ? 'fill-[#D9BF8F]' : 'fill-[#777777]'} ${Roasting==1 && 'bg-[#e8e8e8] shadow-inner'}`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7538 4.14438C21.1976 4.28087 21.4989 4.67159 21.501 5.11396C21.5099 5.30808 21.5106 5.46608 21.5106 5.46608C21.5106 5.46608 21.5037 10.8535 14.7762 15.8126C12.0395 17.83 9.666 21.1093 9.04616 24.1754C8.96469 24.5854 8.62998 24.9085 8.19882 24.9926C7.76767 25.0766 7.32576 24.9053 7.08001 24.5584C5.16261 21.8644 2.98815 16.8298 6.61367 10.8681C9.88284 5.49268 15.9191 2.74395 20.7538 4.14438Z"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.278 27.8709C10.8142 27.7302 10.4984 27.3224 10.4965 26.8607C10.4872 26.681 10.4861 26.5392 10.4861 26.5392C10.4861 26.5392 10.4931 21.1518 17.2205 16.1927C19.9327 14.1935 22.288 10.9547 22.9334 7.91294C23.0227 7.489 23.3729 7.15735 23.8207 7.07447C24.2687 6.99114 24.7252 7.17226 24.9766 7.5332C26.8797 10.2474 28.9703 15.2385 25.3831 21.1372C22.1215 26.4991 16.1072 29.2477 11.278 27.8709Z"/>
                </svg>
                <p className={`${Roasting==1 && 'text-[#956A32] font-bold'}`}>Light</p>
              </li>

              {/* Cinnamon */}
              <li className='flex flex-col items-center text-center w-[12vw] mx-[2vw]' onClick={() =>  Roasting==2 ? setRoasting(0) : setRoasting(2)}>
                <svg className={`transition ease-in-out duration-[500ms] rounded-[50%] ${Roasting==0 || Roasting==2 ? 'fill-[#D1A24A]' : 'fill-[#777777]'} ${Roasting==2 && 'bg-[#e8e8e8] shadow-inner' }`} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7538 4.14438C21.1976 4.28087 21.4989 4.67159 21.501 5.11396C21.5099 5.30808 21.5106 5.46608 21.5106 5.46608C21.5106 5.46608 21.5037 10.8535 14.7762 15.8126C12.0395 17.83 9.666 21.1093 9.04616 24.1754C8.96469 24.5854 8.62998 24.9085 8.19882 24.9926C7.76767 25.0766 7.32576 24.9053 7.08001 24.5584C5.16261 21.8644 2.98815 16.8298 6.61367 10.8681C9.88284 5.49268 15.9191 2.74395 20.7538 4.14438Z"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.278 27.8709C10.8142 27.7302 10.4984 27.3224 10.4965 26.8607C10.4872 26.681 10.4861 26.5392 10.4861 26.5392C10.4861 26.5392 10.4931 21.1518 17.2205 16.1927C19.9327 14.1935 22.288 10.9547 22.9334 7.91294C23.0227 7.489 23.3729 7.15735 23.8207 7.07447C24.2687 6.99114 24.7252 7.17226 24.9766 7.5332C26.8797 10.2474 28.9703 15.2385 25.3831 21.1372C22.1215 26.4991 16.1072 29.2477 11.278 27.8709Z"/>
                </svg>
                <p  className={`${Roasting==2 && 'text-[#956A32] font-bold'}`}>Cinnamon</p>
              </li>

              {/* Medium */}
              <li className='flex flex-col items-center text-center w-[12vw] mx-[2vw]' onClick={() =>  Roasting==3 ? setRoasting(0) : setRoasting(3)}>
                <svg className={`transition ease-in-out duration-[500ms] rounded-[50%] ${Roasting==0 || Roasting==3 ? 'fill-[#C18738]' : 'fill-[#777777]'} ${Roasting==3 && 'bg-[#e8e8e8] shadow-inner' }`} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7538 4.14438C21.1976 4.28087 21.4989 4.67159 21.501 5.11396C21.5099 5.30808 21.5106 5.46608 21.5106 5.46608C21.5106 5.46608 21.5037 10.8535 14.7762 15.8126C12.0395 17.83 9.666 21.1093 9.04616 24.1754C8.96469 24.5854 8.62998 24.9085 8.19882 24.9926C7.76767 25.0766 7.32576 24.9053 7.08001 24.5584C5.16261 21.8644 2.98815 16.8298 6.61367 10.8681C9.88284 5.49268 15.9191 2.74395 20.7538 4.14438Z"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.278 27.8709C10.8142 27.7302 10.4984 27.3224 10.4965 26.8607C10.4872 26.681 10.4861 26.5392 10.4861 26.5392C10.4861 26.5392 10.4931 21.1518 17.2205 16.1927C19.9327 14.1935 22.288 10.9547 22.9334 7.91294C23.0227 7.489 23.3729 7.15735 23.8207 7.07447C24.2687 6.99114 24.7252 7.17226 24.9766 7.5332C26.8797 10.2474 28.9703 15.2385 25.3831 21.1372C22.1215 26.4991 16.1072 29.2477 11.278 27.8709Z"/>
                </svg>
                <p  className={`${Roasting==3 && 'text-[#956A32] font-bold'}`}>Medium</p>
              </li>

              {/* High */}
              <li className='flex flex-col items-center text-center w-[12vw] mx-[2vw]' onClick={() =>  Roasting==4 ? setRoasting(0) : setRoasting(4)}>
                <svg className={`transition ease-in-out duration-[500ms] rounded-[50%] ${Roasting==0 || Roasting==4 ? 'fill-[#956A32]' : 'fill-[#777777]'} ${Roasting==4 && 'bg-[#e8e8e8] shadow-inner' }`} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7538 4.14438C21.1976 4.28087 21.4989 4.67159 21.501 5.11396C21.5099 5.30808 21.5106 5.46608 21.5106 5.46608C21.5106 5.46608 21.5037 10.8535 14.7762 15.8126C12.0395 17.83 9.666 21.1093 9.04616 24.1754C8.96469 24.5854 8.62998 24.9085 8.19882 24.9926C7.76767 25.0766 7.32576 24.9053 7.08001 24.5584C5.16261 21.8644 2.98815 16.8298 6.61367 10.8681C9.88284 5.49268 15.9191 2.74395 20.7538 4.14438Z"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.278 27.8709C10.8142 27.7302 10.4984 27.3224 10.4965 26.8607C10.4872 26.681 10.4861 26.5392 10.4861 26.5392C10.4861 26.5392 10.4931 21.1518 17.2205 16.1927C19.9327 14.1935 22.288 10.9547 22.9334 7.91294C23.0227 7.489 23.3729 7.15735 23.8207 7.07447C24.2687 6.99114 24.7252 7.17226 24.9766 7.5332C26.8797 10.2474 28.9703 15.2385 25.3831 21.1372C22.1215 26.4991 16.1072 29.2477 11.278 27.8709Z"/>
                </svg>
                <p className={`${Roasting==4 && 'text-[#956A32] font-bold'}`}>High</p>
              </li>
            </ul>
            
            <ul className='flex justify-center items-center mt-4 text-xs'>
              {/* City */}
              <li className='flex flex-col items-center text-center w-[12vw] mx-[2vw]' onClick={() =>  Roasting==5 ? setRoasting(0) : setRoasting(5)}>
                <svg className={`transition ease-in-out duration-[500ms] rounded-[50%] ${Roasting==0 || Roasting==5 ? 'fill-[#7F4922]' : 'fill-[#777777]'} ${Roasting==5 && 'bg-[#e8e8e8] shadow-inner' }`} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7538 4.14438C21.1976 4.28087 21.4989 4.67159 21.501 5.11396C21.5099 5.30808 21.5106 5.46608 21.5106 5.46608C21.5106 5.46608 21.5037 10.8535 14.7762 15.8126C12.0395 17.83 9.666 21.1093 9.04616 24.1754C8.96469 24.5854 8.62998 24.9085 8.19882 24.9926C7.76767 25.0766 7.32576 24.9053 7.08001 24.5584C5.16261 21.8644 2.98815 16.8298 6.61367 10.8681C9.88284 5.49268 15.9191 2.74395 20.7538 4.14438Z"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.278 27.8709C10.8142 27.7302 10.4984 27.3224 10.4965 26.8607C10.4872 26.681 10.4861 26.5392 10.4861 26.5392C10.4861 26.5392 10.4931 21.1518 17.2205 16.1927C19.9327 14.1935 22.288 10.9547 22.9334 7.91294C23.0227 7.489 23.3729 7.15735 23.8207 7.07447C24.2687 6.99114 24.7252 7.17226 24.9766 7.5332C26.8797 10.2474 28.9703 15.2385 25.3831 21.1372C22.1215 26.4991 16.1072 29.2477 11.278 27.8709Z"/>
                </svg>
                <p className={`${Roasting==5 && 'text-[#956A32] font-bold'}`}>City</p>
              </li>

              {/* Fullcity */}
              <li className='flex flex-col items-center text-center w-[12vw] mx-[2vw]' onClick={() =>  Roasting==6 ? setRoasting(0) : setRoasting(6)}>
                <svg className={`transition ease-in-out duration-[500ms] rounded-[50%] ${Roasting==0 || Roasting==6 ? 'fill-[#603620]' : 'fill-[#777777]'} ${Roasting==6 && 'bg-[#e8e8e8] shadow-inner' }`} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7538 4.14438C21.1976 4.28087 21.4989 4.67159 21.501 5.11396C21.5099 5.30808 21.5106 5.46608 21.5106 5.46608C21.5106 5.46608 21.5037 10.8535 14.7762 15.8126C12.0395 17.83 9.666 21.1093 9.04616 24.1754C8.96469 24.5854 8.62998 24.9085 8.19882 24.9926C7.76767 25.0766 7.32576 24.9053 7.08001 24.5584C5.16261 21.8644 2.98815 16.8298 6.61367 10.8681C9.88284 5.49268 15.9191 2.74395 20.7538 4.14438Z"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.278 27.8709C10.8142 27.7302 10.4984 27.3224 10.4965 26.8607C10.4872 26.681 10.4861 26.5392 10.4861 26.5392C10.4861 26.5392 10.4931 21.1518 17.2205 16.1927C19.9327 14.1935 22.288 10.9547 22.9334 7.91294C23.0227 7.489 23.3729 7.15735 23.8207 7.07447C24.2687 6.99114 24.7252 7.17226 24.9766 7.5332C26.8797 10.2474 28.9703 15.2385 25.3831 21.1372C22.1215 26.4991 16.1072 29.2477 11.278 27.8709Z"/>
                </svg>
                <p className={`${Roasting==6 && 'text-[#956A32] font-bold'}`}>Fullcity</p>
              </li>

              {/* French */}
              <li className='flex flex-col items-center text-center w-[12vw] mx-[2vw]' onClick={() =>  Roasting==7 ? setRoasting(0) : setRoasting(7)}>
                <svg className={`transition ease-in-out duration-[500ms] rounded-[50%] ${Roasting==0 || Roasting==7 ? 'fill-[#422A20]' : 'fill-[#777777]'} ${Roasting==7 && 'bg-[#e8e8e8] shadow-inner' }`} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7538 4.14438C21.1976 4.28087 21.4989 4.67159 21.501 5.11396C21.5099 5.30808 21.5106 5.46608 21.5106 5.46608C21.5106 5.46608 21.5037 10.8535 14.7762 15.8126C12.0395 17.83 9.666 21.1093 9.04616 24.1754C8.96469 24.5854 8.62998 24.9085 8.19882 24.9926C7.76767 25.0766 7.32576 24.9053 7.08001 24.5584C5.16261 21.8644 2.98815 16.8298 6.61367 10.8681C9.88284 5.49268 15.9191 2.74395 20.7538 4.14438Z"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.278 27.8709C10.8142 27.7302 10.4984 27.3224 10.4965 26.8607C10.4872 26.681 10.4861 26.5392 10.4861 26.5392C10.4861 26.5392 10.4931 21.1518 17.2205 16.1927C19.9327 14.1935 22.288 10.9547 22.9334 7.91294C23.0227 7.489 23.3729 7.15735 23.8207 7.07447C24.2687 6.99114 24.7252 7.17226 24.9766 7.5332C26.8797 10.2474 28.9703 15.2385 25.3831 21.1372C22.1215 26.4991 16.1072 29.2477 11.278 27.8709Z"/>
                </svg>
                <p className={`${Roasting==7 && 'text-[#956A32] font-bold'}`}>French</p>
              </li>

              {/* Italian */}
              <li className='flex flex-col items-center text-center w-[12vw] mx-[2vw]' onClick={() =>  Roasting==8 ? setRoasting(0) : setRoasting(8)}>
                <svg className={`transition ease-in-out duration-[500ms] rounded-[50%] ${Roasting==0 || Roasting==8 ? 'fill-[#3F120F]' : 'fill-[#777777]'} ${Roasting==8 && 'bg-[#e8e8e8] shadow-inner' }`} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7538 4.14438C21.1976 4.28087 21.4989 4.67159 21.501 5.11396C21.5099 5.30808 21.5106 5.46608 21.5106 5.46608C21.5106 5.46608 21.5037 10.8535 14.7762 15.8126C12.0395 17.83 9.666 21.1093 9.04616 24.1754C8.96469 24.5854 8.62998 24.9085 8.19882 24.9926C7.76767 25.0766 7.32576 24.9053 7.08001 24.5584C5.16261 21.8644 2.98815 16.8298 6.61367 10.8681C9.88284 5.49268 15.9191 2.74395 20.7538 4.14438Z"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.278 27.8709C10.8142 27.7302 10.4984 27.3224 10.4965 26.8607C10.4872 26.681 10.4861 26.5392 10.4861 26.5392C10.4861 26.5392 10.4931 21.1518 17.2205 16.1927C19.9327 14.1935 22.288 10.9547 22.9334 7.91294C23.0227 7.489 23.3729 7.15735 23.8207 7.07447C24.2687 6.99114 24.7252 7.17226 24.9766 7.5332C26.8797 10.2474 28.9703 15.2385 25.3831 21.1372C22.1215 26.4991 16.1072 29.2477 11.278 27.8709Z"/>
                </svg>
                <p className={`${Roasting==8 && 'text-[#956A32] font-bold'}`}>Italian</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* my feeling */}
      <div className='flex flex-col justify-center items-center mt-[10vh] w-[90vw] mx-[5vw]'>
        <form action="" className='w-[80vw]'>
          <h1 className='text-lg font-semibold text-center'>酸味</h1>
          <input className='appearance-none outline-none h-1 w-[100%] bg-[#D6B16B] rounded-sm' type="range" name="bitter" min="1" max="5" onChange={(e) => setBitter(Number(e.target.value))}/>
          <ul className='flex justify-between items-center mx-1 mt-2 font-semibold'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>

          <h1 className='text-lg font-semibold mt-8 text-center'>苦味</h1>
          <input className='appearance-none outline-none h-1 w-[100%] bg-[#D6B16B] rounded-sm' type="range" name="" min="1" max="5" onChange={(e) => setSour(Number(e.target.value))}/>
          <ul className='flex justify-between items-center mx-1 mt-2 font-semibold'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>

          <h1 className='text-lg font-semibold mt-8 text-center'>コク</h1>
          <input className='appearance-none outline-none h-1 w-[100%] bg-[#D6B16B] rounded-sm' type="range" name="" min="1" max="5" onChange={(e) => setBody(Number(e.target.value))}/>
          <ul className='flex justify-between items-center mx-1 mt-2 font-semibold'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </form>

      </div>

      <form className='mt-24 text-center'>
        <button className={`p-2 w-[24vw] rounded-md font-semibold shadow-md ${shopName == "" || beansName == "" ? "bg-[#4d4d4d] text-[#a7a7a7]" : "bg-[#CB9650] text-white"}`} onClick={() => handleClick()} type='button'>保存する</button>    
      </form>


    </div>
  )
}

export default Record
