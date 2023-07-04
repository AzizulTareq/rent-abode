import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image src={'/images/loading.gif'} width={280} height={250} alt='loading...' />
  </div>
  )
}
