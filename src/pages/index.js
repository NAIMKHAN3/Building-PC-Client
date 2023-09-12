import FeaturedCategory from '@/components/FeaturedCategory'
import FeaturedProduct from '@/components/FeaturedProduct'
import RootLayout from '@/components/RootLayout'

export default function Home({ data, category }) {
  return (
    <div>
      <img className='w-full  md:h-[500px]' src="https://i.ibb.co/BsdJWGY/Capture.png" alt="" />
      <FeaturedProduct data={data} />
      <FeaturedCategory data={category} />
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export const getStaticProps = async () => {

  const res = await fetch('https://building-pc.vercel.app/api/v1/product/random-products')
  const data = await res.json()
  const response = await fetch('https://building-pc.vercel.app/api/v1/category/categorys')
  const category = await response.json()
  return {
    props: {
      data,
      category,
    },
  };

}

