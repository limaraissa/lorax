import {Link} from "react-router-dom"
export default function Header() {
  return (
    <div >
        <h1 className="text-orange-600 text-5xl text-center font-bold my-8 m-60 border-8 border-amber-500 rounded-2xl bg-orange-100 ">lorax: A tufula perdida</h1>
        <div className="flex-row">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/personagens">Personagens</Link>
                    </li>
                    <li>
                        <Link to="/sinopse">Sinopse</Link>
                    </li>
                </ul>
            </nav>
        </div>
        
    </div>
  )
}
