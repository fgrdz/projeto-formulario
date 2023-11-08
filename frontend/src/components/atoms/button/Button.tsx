import './button.css'
interface ButtonProps{
    texto:string
}
const Button = ({texto}:ButtonProps)=>{
    return(
        <>
            <button>{texto}</button>
        </>
    )
}

export default Button