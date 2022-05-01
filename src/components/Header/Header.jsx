import Logo from "./components/Logo/Logo"
import './Header.css'

export default function Header (){
    return(
        <header className='header'>
            <Logo/>
            <div>
                <p>Dave</p>
            </div>
        </header>
    )
    
}