import Cookies from 'js-cookie'
import './index.css'

import { Redirect } from 'react-router-dom'

import Header from '../Header'
const Home=(props)=>{
    const token=Cookies.get('token')
    if(token===undefined)
    {
       return <Redirect to='/login'/>
    }
    const shopNow=()=>{
        // return <Redirect to='/Products'/>
     const{history}=props
     history.replace('/Products')

        
    }
    return(
        <>
        <Header/>
        <div className='homecontainer'>
        <div className='home1'>
            <h1 className='homehead'>Clothes That Get YOU Noticed</h1>
            <p className='homepara'>Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.</p>
            <button className='shopbut' onClick={shopNow}>Shop Now</button>
        </div>
        <div className='home2'>
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" className='homeiimg' alt="homeimg"/>
        </div>
        </div>
        </>

    )
}
export default Home