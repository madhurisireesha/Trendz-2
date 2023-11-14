import {Link,withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'


const Header=(props)=>{
    const{history}=props
   const onClickLogout=()=>{
    
        Cookies.remove('jwt_token')
        history.replace('/login')
    }
    return(
        <div className='navbar'>
        <div className='head1'>
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" className='headlogo' alt="headlogo"/>

        </div>
        <div className='head2'>
            <Link to='/' className='li'>Home</Link>
            <Link to='/products' className='li'>Products</Link>
            <Link to='/cart' className='li'>Cart</Link>
             <button className='logbut' onClick={onClickLogout}>Logout</button>

        </div>
        </div>

    )
}
export default withRouter(Header)