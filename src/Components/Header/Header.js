import Logo from '../Logo/Logo'
import './Header.css'
import Nav from '../Nav/Nav'



function Header (){
    return(

    <>
<header className="Header ">
			
<div className="container">
				<div className="Head flex">
				
					<Logo />
                    <Nav />
					

				</div>
                </div>
                		

		</header>
        <div className="srtip"></div>
	
    </>    
    )
}

export default Header 