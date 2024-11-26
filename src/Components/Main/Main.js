import Button from '../Button/Button'
import './Main.css'

  function Main () {
    return(
    <section className ="title">
	<div className="container">
    <div className="sec_tit flex">
 <h2 className="tit_txt">Все кроссовки</h2>
<div className="search flex">
  <i className="ic_search"></i>
 <input type="text" className="input"  placeholder='  Поиск...'/>
 </div>
    </div>
	
	</div>
	</section>
	
    )
}


export default  Main