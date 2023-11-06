import { NextPage } from 'next'
import Image from 'next/image'

// Import Component
import GoogleMaps from "../components/GoogleMap/page";


interface Props {

}

const page: NextPage<Props> = () => {
  return (
    <div className='py-32 w-[100vw]'>
      {/* cafe map */}
      <div className='w-[90vw] mx-[5vw]'>
        <h1 className='text-lg font-rubik font-semibold'>カフェ・焙煎所を探す</h1>
        <div className='w-[90vw] aspect-[4/3] my-2 shadow-lg rounded-lg'>
          <GoogleMaps/>
        </div>
      </div>

      {/* around info */}
      <div className='my-16'>
        <h1 className='w-[90vw] mx-[5vw] pb-2 text-xl font-rubik font-semibold border-b-2'>近くのお店</h1>
        <div className='flex overflow-x-auto overflow-visible py-1'>
          <div className='flex flex-col justify-center items-center m-2 p-4 w-[60vw] bg-white shadow-lg rounded-md'>
            <Image src={''} alt="" className='w-[52vw] mx-[4vw] aspect-[4/3] bg-gray-400'/>
            <h1 className='w-[52vw] text-xl font-rubik font-semibold text-left'>お店１</h1>
            <p className='w-[52vw] text-left'>説明１</p>
          </div>

          <div className='flex flex-col justify-center items-center m-2 p-4 w-[60vw] bg-white shadow-lg rounded-md'>
            <Image src={''} alt="" className='w-[52vw] mx-[4vw] aspect-[4/3] bg-gray-400'/>
            <h1 className='w-[52vw] text-xl font-rubik font-semibold text-left'>お店２</h1>
            <p className='w-[52vw] text-left'>説明２</p>
          </div>

          <div className='flex flex-col justify-center items-center m-2 p-4 w-[60vw] bg-white shadow-lg rounded-md'>
            <Image src={''} alt="" className='w-[52vw] mx-[4vw] aspect-[4/3] bg-gray-400'/>
            <h1 className='w-[52vw] text-xl font-rubik font-semibold text-left'>お店３</h1>
            <p className='w-[52vw] text-left'>説明３</p>
          </div>
        </div>
      </div>
      
      {/* bookmark info */}
      <div className='my-12'>
        <h1 className='w-[90vw] mx-[5vw] pb-2 text-xl font-rubik font-semibold border-b-2'>保存リスト</h1>
        <div className='flex overflow-x-auto overflow-visible py-4'>
          <div className='flex flex-col justify-center items-center m-2 p-4 w-[60vw] bg-white shadow-lg rounded-md'>
            <Image src={''} alt="" className='w-[52vw] mx-[4vw] aspect-[4/3] bg-gray-400'/>
            <h1 className='w-[52vw] text-xl font-rubik font-semibold text-left'>お店１</h1>
            <p className='w-[52vw] text-left'>説明１</p>
          </div>

          <div className='flex flex-col justify-center items-center m-2 p-4 w-[60vw] bg-white shadow-lg rounded-md'>
            <Image src={''} alt="" className='w-[52vw] mx-[4vw] aspect-[4/3] bg-gray-400'/>
            <h1 className='w-[52vw] text-xl font-rubik font-semibold text-left'>お店２</h1>
            <p className='w-[52vw] text-left'>説明２</p>
          </div>

          <div className='flex flex-col justify-center items-center m-2 p-4 w-[60vw] bg-white shadow-lg rounded-md'>
            <Image src={''} alt="" className='w-[52vw] mx-[4vw] aspect-[4/3] bg-gray-400'/>
            <h1 className='w-[52vw] text-xl font-rubik font-semibold text-left'>お店３</h1>
            <p className='w-[52vw] text-left'>説明３</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page
