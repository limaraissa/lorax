import vilao from '../assets/once-ler.webp'
import lorax from '../assets/lorax.jpeg'
import audrey from '../assets/Audrey.webp'
import prefeito from '../assets/prefeito.webp'
import ted from '../assets/Ted.webp'
import Header from './Header'

export default function Personagens() {
  return (

    <div className='bg-orange-100'>
      <Header />
      <h1 className='text-orange-600 text-5xl text-center font-bold my-8 m-60 border-8 border-amber-500 rounded-2xl bg-orange-100 '>Personagens</h1>

      <section className='flex flex-col items-center'>
        <img src={ted} alt="personagem principal"  />
        <p className='text-3xl font-semibold'>ted</p>
      </section>
      
      <section className='flex flex-col items-center'>
        <img src={vilao} alt="o personagem que o poder subiu a cabeça" />
        <p>once-ler</p>
      </section>
      
      <section>
        <img src={lorax} alt="lorax" />
        <p>lorax</p>
      </section>
      
      <section>
        <img src={prefeito} alt="prefeito da cida" />
        <p>prefeito</p>
      </section>
      <section>
        <img src={audrey} alt="" />
        <p>Audrey</p>
      </section>
      
    </div>
  )
}
