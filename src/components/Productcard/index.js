import {Link} from 'react-router-dom'
import './index.css'
const Productcard=(props)=>{
    const{data}=props
    const{title,brand,price,imageUrl,rating,id}=data
    return(
        <Link to={`products/${id}`}>
        <div className='productcontainer'>
          
            <div className='inner'>
               
        <img src={imageUrl} alt="proimage" className="proimage"/>
        <h3 className='title'>{title}</h3>
        <p>By {brand}</p>
        <div className='pc1'>
            <p className='price'>RS {price}</p>
            
            <div className='pc2'>
        <p >{rating}</p>
        
        <img src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png" alt="star" className='star'/></div> </div>
        </div>
       
        </div>
        </Link>
    )
}
export default Productcard