"use client"
import Image from 'next/legacy/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

// firebase
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../api/firebase";
import { doc, getDocs, collection, query } from "firebase/firestore";

// import img
import CoffeeCup from "../../images/coffee-cup.png";


const Mypage = () => {
  const [ userId, setUserId ] = useState("");
  const [ userName, setUserName ] = useState("");
  const [ recordData, setRecordData ] = useState();
  
  const router = useRouter()

  onAuthStateChanged(auth, (user) => {
    (user == null) && router.push("/login")
  });

  useEffect(() => {
    const user = auth.currentUser;

    if(user !== null) {
      // set display name
      if (user.displayName !== null) {
        setUserName(user.displayName)
      } else {
        setUserName("未登録")
      }
      // get data
      if (user.uid !== null) {
        getData(user.uid)
      }
    } 
  }, [])

  // get data
  const getData = async (uid:string) => {
    const q = query(collection(db, uid));
    const querySnapshot = await getDocs(q);
    const recordArray:string[][] = [];

    querySnapshot.forEach((doc) => {
      recordArray.push([doc.id, doc.data().beansName]);
    });

    setRecordData(recordArray)
  }

  //google logout
  const logOut = () => {
    signOut(auth).then(() => {
      console.log("logout");
    })
  }

  return (
    <div className='py-28 w-[100vw] font-rounded'>
      <h1 className='w-[90vw] mx-[5vw] mb-8 text-lg font-semibold'>マイページ</h1>
      <div className='flex flex-col justify-center items-center'>
        <svg className='w-16 fill-[#412312]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/>
        </svg>
        <h1 className='my-4 text-2xl font-semibold'>{userName}</h1>
        <button className='mt-16 px-12 py-2 shadow-lg rounded-md bg-gray-600 font-bold text-white' onClick={ () => logOut()}>ログアウト</button>
      </div>

      {/* recently record */}
      <div className='my-32'>
        <h1 className='w-[90vw] mx-[5vw] pb-2 text-xl text-center font-rubik font-semibold border-b-2'>これまでの記録</h1>
        <div className='flex overflow-x-auto overflow-visible py-2'>
          {
            recordData && (
              recordData.map((data:Array<string>) => {
                console.log(data[0], data[1]);
                return (
                  <div className='flex flex-col justify-center items-center m-2 p-4 w-[60vw] bg-white shadow-lg rounded-md text-center'>
                    <Image src={CoffeeCup} alt='coffee_cup_img' width={52} height={52} className='mb-6 p-2' />
                    <h1 className='w-[52vw] text-xl font-rubik font-semibold'>{data[0]}</h1>
                    <h2 className='w-[52vw] text-lg mb-4 font-rubik font-semibold'>{data[1]}</h2>
                  </div>
                )
              })
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Mypage
Mypage