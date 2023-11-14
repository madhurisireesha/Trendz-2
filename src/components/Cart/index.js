
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import Header from '../Header'
import './index.css'
const Cart=()=>{
    const token=Cookies.get('token')
    console.log(token)
    if(token===undefined)
    {
       return <Redirect to="/login"/>
    }
   
    return(
       <>
       <Header/>
       <div className='cartcontainer'>
       <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png" alt="cart" className="cart"/>
       </div>
       </>
    )
}
export default Cart