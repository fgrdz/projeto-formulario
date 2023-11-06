import 'bootstrap/dist/css/bootstrap.css';
import image from '../../../assets/logo.svg'
import './banner.css'
const Banner =()=>{
    return(
        <>
            <div className="container-banner">
                <img src={image}></img>
              
            
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Sobre nós</a>
                </li>
                <div className='divisoria'></div>
                <li className="nav-item">
                    <a className="nav-link" href="#">Marcas</a>
                </li>
                <div className='divisoria'></div>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contato</a>
                </li>
            </ul>
            </div>
        </>
    )
}

export default Banner