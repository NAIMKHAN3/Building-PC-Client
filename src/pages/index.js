import RootLayout from '@/components/RootLayout'

export default function Home() {
  return (
    <div>
      <img className='w-full  md:h-[500px]' src="https://i.ibb.co/BsdJWGY/Capture.png" alt="" />
    </div>
  )
}

Home.getLayout = function getLayout(page){
  return <RootLayout>{page}</RootLayout>
}
