// import Logo from '../Logo/Logo'
import Logo from '../Logo/Logo'
import './Nav.css' 

function Nav () {
    return(
        <div className="container">
 
      <nav class="menu">
       
        <ul class=" flex">
        

       <div className="menu_icon">
        <i class="menu_ic1"></i>
        <li><a href="" className="hover">Закладки</a></li>
       </div>
          
       <div class="menu_icon">
        <i class="menu_ic2"></i>
        <li><a href="" className="hover">1205 руб.</a></li>
       </div>

       <div class="menu_icon">
        <i class="menu_ic3"></i>
        <li><a href="" className="hover">Профиль</a></li>


       </div>

          
        </ul>
      </nav>
    </div>

    
 
    
    )
    
    

}


export default Nav