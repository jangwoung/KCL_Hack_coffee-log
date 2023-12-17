import { NextPage } from 'next'
import Image from 'next/image'

import mapImg from '../../../images/1871cc189d023ec6699912121cd406df.jpg'
interface Props {

}

const page: NextPage<Props> = () => {
  return (
    <div>
      <Image src={mapImg}></Image>
    </div>
  )
}

export default page