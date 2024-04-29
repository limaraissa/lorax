import img1 from '../assets/lorax1.jpeg'
import Header from './Header'

export default function Home() {
  return (
    <div>
      <Header />

      <h1 className='text-orange-600 text-5xl text-center font-bold my-8 m-60 border-8 border-amber-500 rounded-2xl bg-orange-100 '>LORAX</h1>
      <section className='flex justify-center'>
        <img src={img1} alt="imagem capa do filme lorax" className='w-96 h-80 rounded-2xl' />
      </section>
    </div>
  )
}
