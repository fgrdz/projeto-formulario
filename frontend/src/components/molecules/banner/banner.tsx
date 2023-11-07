import image from '../../../assets/logo.svg'
import './banner.css'
const Banner =()=>{
    return(
        <>
            <div className="container-banner">
                <img src={image} alt="Imagem da logo da cox automotive" ></img>
              
            
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active">Sobre nós</a>
                </li>
                <div className='divisoria'></div>
                <li className="nav-item">
                    <a className="nav-link">Marcas</a>
                </li>
                <div className='divisoria'></div>
                <li className="nav-item">
                    <a className="nav-link">Contato</a>
                </li>
            </ul>
            </div>
        </>
    )
}

export default Banner