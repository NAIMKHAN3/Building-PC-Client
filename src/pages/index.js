import RootLayout from '@/components/RootLayout'

export default function Home() {
  return (
    <h1 className='text-indigo-900'>Project Setup</h1>
  )
}

Home.getLayout = function getLayout(page){
  return <RootLayout>{page}</RootLayout>
}
