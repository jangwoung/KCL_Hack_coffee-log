import Image from 'next/image'

// import Image
import Undraw_coffee from "../images/undraw_coffee.svg";

export default function Home() {
  return (
    <div className='py-32 w-[100vw]'>
      {/* top info */}
      <div className='flex flex-col justify-center items-center w-[90vw] mx-[5vw] mt-4'>
        <Image src={Undraw_coffee} alt="art" className='h-[40vw]' />
        <p className='mt-4 w-[80vw] text-sm font-semibold '>
          コーヒーはコーヒーベルトと呼ばれる北回帰線と南回帰線の間の約70カ国で生産されており、そのコーヒー農園でコーヒーノキの栽培と果実の収穫が行われる。
        </p>
      </div>

      {/* coffee news */}
      <div className='my-16'>
        <h1 className='w-[90vw] mx-[5vw] pb-2 text-xl font-rubik font-semibold border-b-2'>今日の珈琲</h1>
        <div className='flex flex-col justify-center items-center m-2 p-4 w-[90vw] mx-[5vw]'>
          <Image src={''} alt="" className='w-[80vw] mx-[4vw] aspect-[4/3] bg-gray-400'/>
          <h1 className='w-[80vw] text-xl font-rubik font-semibold text-left'>お店１</h1>
          <p className='w-[80vw] text-left'>説明１</p>
        </div>
        
      </div>

      {/* sweets */}
      <div className='my-16'>
        <h1 className='w-[90vw] mx-[5vw] pb-2 text-xl font-rubik font-semibold border-b-2'>おすすめ</h1>
        <div className='flex overflow-x-auto overflow-visible py-2'>
          <div className='flex flex-col justify-center items-center m-2 p-4 w-[60vw] bg-white shadow-lg rounded-md'>
            <Image src={''} alt="" className='w-[52vw] mx-[4vw] aspect-[4/3] bg-gray-400'/>
            <h1 className='w-[52vw] text-xl font-rubik font-semibold text-left'>ショップ名１</h1>
            <p className='w-[52vw] text-left'>説明１</p>
          </div>

          <div className='flex flex-col justify-center items-center m-2 p-4 w-[60vw] bg-white shadow-lg rounded-md'>
            <Image src={''} alt="" className='w-[52vw] mx-[4vw] aspect-[4/3] bg-gray-400'/>
            <h1 className='w-[52vw] text-xl font-rubik font-semibold text-left'>ショップ名２</h1>
            <p className='w-[52vw] text-left'>説明２</p>
          </div>

          <div className='flex flex-col justify-center items-center m-2 p-4 w-[60vw] bg-white shadow-lg rounded-md'>
            <Image src={''} alt="" className='w-[52vw] mx-[4vw] aspect-[4/3] bg-gray-400'/>
            <h1 className='w-[52vw] text-xl font-rubik font-semibold text-left'>ショップ名３</h1>
            <p className='w-[52vw] text-left'>説明３</p>
          </div>
        </div>
      </div>

      {/* sweets */}
      <div className='my-16'>
        <h1 className='w-[90vw] mx-[5vw] pb-2 text-xl font-rubik font-semibold border-b-2'>スイーツ</h1>
        <div className='flex overflow-x-auto overflow-visible py-2'>
          <div className='flex flex-col justify-center items-center m-2 p-4 w-[60vw] bg-white shadow-lg rounded-md'>
            <Image src={''} alt="" className='w-[52vw] mx-[4vw] aspect-[4/3] bg-gray-400'/>
            <h1 className='w-[52vw] text-xl font-rubik font-semibold text-left'>お菓子１</h1>
            <p className='w-[52vw] text-left'>説明１</p>
          </div>

          <div className='flex flex-col justify-center items-center m-2 p-4 w-[60vw] bg-white shadow-lg rounded-md'>
            <Image src={''} alt="" className='w-[52vw] mx-[4vw] aspect-[4/3] bg-gray-400'/>
            <h1 className='w-[52vw] text-xl font-rubik font-semibold text-left'>お菓子２</h1>
            <p className='w-[52vw] text-left'>説明２</p>
          </div>

          <div className='flex flex-col justify-center items-center m-2 p-4 w-[60vw] bg-white shadow-lg rounded-md'>
            <Image src={''} alt="" className='w-[52vw] mx-[4vw] aspect-[4/3] bg-gray-400'/>
            <h1 className='w-[52vw] text-xl font-rubik font-semibold text-left'>お菓子３</h1>
            <p className='w-[52vw] text-left'>説明３</p>
          </div>
        </div>
      </div>

    </div>
  )
}