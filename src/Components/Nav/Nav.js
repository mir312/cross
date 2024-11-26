import './Nav.css' 

function Nav () {
    return(
    <nav className="menu">
    <ul className="flex">
    <div class="container">
      <nav class="menu">
        <ul class="flex">
    

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
    </ul>
    </nav>  
    )

}

export default Nav