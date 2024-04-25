import img1 from '../assets/lorax1.jpeg'

export default function Home() {
  return (
    <div >
        <h1 className='text-orange-600 text-5xl text-center font-bold my-8 m-60 border-8 border-amber-500 rounded-2xl bg-orange-100 '> 
        LORAX
        </h1>
        <img src={img1} alt="imagem capa do filme lorax"  className='w-96 h-80 place-content-center rounded-2xl w-2/4 h-96	'/>
    </div>
  )
}
