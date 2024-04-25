import vilao from '../assets/once-ler.webp'
import lorax from '../assets/lorax.jpeg'
import audrey from '../assets/Audrey.webp'
import prefeito from '../assets/prefeito.webp'
import ted from '../assets/Ted.webp'
import Header from '../componentes/Header'

export default function Personagens() {
  return (
    <div>
      <Header />
      <h2>Personagens</h2>
      <img src={ted} alt="personagem principal" className='text-9xl' />
      <p>ted</p>
      <img src={vilao} alt="o personagem que o poder subiu a cabeça" />
      <p>once-ler</p>
      <img src={lorax} alt="lorax" />
      <p>lorax</p>
      <img src={prefeito} alt="prefeito da cida" />
      <p>prefeito</p>
      <img src={audrey} alt="" />
      <p>Audrey</p>
    </div>
  )
}
