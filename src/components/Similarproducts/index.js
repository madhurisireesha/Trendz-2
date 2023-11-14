import './index.css'
const Similarproducts=(props)=>{
    console.log(props)
    const{details}=props
    const{imageUrl,title,brand,rating,price}=details
    return(
          <>
              
                <div className='similarcontainer'>
                <div className='proone'>
                    <img src={imageUrl} className='imageone' alt="imageone"/>
                    <h4>{title}</h4>
                    <p>By {brand}</p>
                    <div className='protwo'>
                        <h3>Rs {price}</h3>
                        <div className='r'>
                            <p>{rating}</p>
                            <img src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png" className='star' alt="sa"/>
                        </div>
                    </div>
                </div>
            </div>
               </>
            )
    
}
export default Similarproducts