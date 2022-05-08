import Button from "../../common/Button/Button"
import Logo from "./components/Logo/Logo"
import './Header.css'

export default function Header (){
    return(
        <header className='header'>
            <Logo/>
            <div className='login'>
                <p>Dave</p>
                <Button buttonText='Logout'/>
            </div>
            
        </header>
    )
    
}