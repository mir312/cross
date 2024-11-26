import  './Logo.css'
import logo from '../../img/logo.png'





function Logo (){
    return(
      <>
      <div className="container">

      <img className='logo' src={logo} alt="" />
      </div>
      </>  
            
            
    )      
}

export default Logo