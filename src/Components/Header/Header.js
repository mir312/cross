import Logo from '../Logo/Logo'
import './Header.css'
import Nav from '../Nav/Nav'



function Header (){
    return(

    <>
<header className="Header">
			

				<div className="Head flex">
				<div className="container">
					<Logo />
                    <Nav />
					
		

				</div>
			</div>
		</header>
	
    </>    
    )
}

export default Header 