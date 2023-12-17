import { NextPage } from 'next'
import Image from 'next/image'


// import Image
import Slider from "../../images/sliders-solid.svg";

interface Props {

}

const Shop: NextPage<Props> = () => {
  return (
    <div className='py-28 w-[100vw] font-rounded'>
      <h1 className='w-[90vw] mx-[5vw] mb-8 text-lg font-rubik font-semibold'>珈琲豆の購入</h1>

      {/* search bar */}
      <div>
        <h2 className='w-[90vw] mx-[5vw] mb-2 text-md font-rubik font-semibold'>珈琲豆を探す</h2>
        <form action="" className='flex w-[90vw] mx-[5vw]'>
          <input 
            type="text" 
            placeholder='キーワードを入力してください。' 
            className='w-[76vw] mr-[4vw] px-4 bg-gray-200 rounded-2xl'
          />
          <Image src={Slider} alt="" className='w-[8vw] aspect-[1/1]'/>
        </form>
      </div>

      {/* search result */}
      <div className='my-8'>
        <div className='flex w-[90vw] mx-[5vw] my-8 p-4 bg-white shadow-lg rounded-lg'>
          <Image src={''} alt="" className='w-[40vw] aspect-[4/3] bg-gray-400'/>
          <div className='mx-4'>
            <h1 className='my-2 text-xl font-semibold'>ショップ名</h1>
            <ul>
              <li className='my-2 text-sm font-semibold'>品種：</li>
              <li className='my-2 text-sm font-semibold'>焙煎度：</li>
              <li className='my-2 text-sm font-semibold'>価格(/100g)：</li>
            </ul>
          </div>
        </div>

        <div className='flex w-[90vw] mx-[5vw] my-8 p-4 bg-white shadow-lg rounded-lg'>
          <Image src={''} alt="" className='w-[40vw] aspect-[4/3] bg-gray-400'/>
          <div className='mx-4'>
            <h1 className='my-2 text-xl font-semibold'>ショップ名</h1>
            <ul>
              <li className='my-2 text-sm font-semibold'>品種：</li>
              <li className='my-2 text-sm font-semibold'>焙煎度：</li>
              <li className='my-2 text-sm font-semibold'>価格(/100g)：</li>
            </ul>
          </div>
        </div>

        <div className='flex w-[90vw] mx-[5vw] my-8 p-4 bg-white shadow-lg rounded-lg'>
          <Image src={''} alt="" className='w-[40vw] aspect-[4/3] bg-gray-400'/>
          <div className='mx-4'>
            <h1 className='my-2 text-xl font-semibold'>ショップ名</h1>
            <ul>
              <li className='my-2 text-sm font-semibold'>品種：</li>
              <li className='my-2 text-sm font-semibold'>焙煎度：</li>
              <li className='my-2 text-sm font-semibold'>価格(/100g)：</li>
            </ul>
          </div>
        </div>

        <div className='flex w-[90vw] mx-[5vw] my-8 p-4 bg-white shadow-lg rounded-lg'>
          <Image src={''} alt="" className='w-[40vw] aspect-[4/3] bg-gray-400'/>
          <div className='mx-4'>
            <h1 className='my-2 text-xl font-semibold'>ショップ名</h1>
            <ul>
              <li className='my-2 text-sm font-semibold'>品種：</li>
              <li className='my-2 text-sm font-semibold'>焙煎度：</li>
              <li className='my-2 text-sm font-semibold'>価格(/100g)：</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Shop
