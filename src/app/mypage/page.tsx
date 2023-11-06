import { NextPage } from 'next'
import Image from 'next/image'

interface Props {

}

const Mypage: NextPage<Props> = () => {
  return (
    <div className='py-32 w-[100vw] font-rounded'>
      <h1 className='w-[90vw] mx-[5vw] mb-8 text-lg font-semibold'>マイページ</h1>
      <div className='flex flex-col justify-center items-center'>
        <Image src={""} alt='maypage_plf_img' className='w-[40vw] aspect-square rounded-[50%] bg-gray-400'/>
        <h1 className='my-8 text-2xl font-semibold'>ニックネーム</h1>
      </div>

      {/* recently record */}
      <div className='my-16'>
        <h1 className='w-[90vw] mx-[5vw] pb-2 text-xl text-center font-rubik font-semibold border-b-2'>これまでの記録</h1>
        <div className='flex overflow-x-auto overflow-visible py-2'>
          <div className='flex flex-col justify-center items-center m-2 p-4 w-[60vw] bg-white shadow-lg rounded-md'>
            <Image src={''} alt="" className='w-[52vw] mx-[4vw] aspect-[4/3] bg-gray-400'/>
            <h1 className='w-[52vw] text-xl font-rubik font-semibold text-left'>ショップ名・品種名１</h1>
            <p className='w-[52vw] text-left'>説明１</p>
          </div>

          <div className='flex flex-col justify-center items-center m-2 p-4 w-[60vw] bg-white shadow-lg rounded-md'>
            <Image src={''} alt="" className='w-[52vw] mx-[4vw] aspect-[4/3] bg-gray-400'/>
            <h1 className='w-[52vw] text-xl font-rubik font-semibold text-left'>ショップ名・品種名２</h1>
            <p className='w-[52vw] text-left'>説明２</p>
          </div>

          <div className='flex flex-col justify-center items-center m-2 p-4 w-[60vw] bg-white shadow-lg rounded-md'>
            <Image src={''} alt="" className='w-[52vw] mx-[4vw] aspect-[4/3] bg-gray-400'/>
            <h1 className='w-[52vw] text-xl font-rubik font-semibold text-left'>ショップ名・品種名３</h1>
            <p className='w-[52vw] text-left'>説明３</p>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Mypage
Mypage