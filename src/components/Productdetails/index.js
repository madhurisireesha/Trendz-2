import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Similarproducts from '../Similarproducts'
import './index.css'
class Productdetails extends Component{
    state={
        productData:[],
        similarpro:[],
        count:0,
        isLoading:true
    }
    componentDidMount(){
        this.getDetails()
    }
    getDetails=async()=>{
        const token=Cookies.get('token')
        const{match}=this.props
        const{params}=match
        const{id}=params
        const options={
            headers:{
                Authorization:`Bearer ${token}`
            },
            method:'GET'
        }
        const response=await fetch(`https://apis.ccbp.in/products/${id}`,options)
        if(response.ok===true)
        {
            const fetchedData=await response.json()
            const updatedData={
                id:fetchedData.id,
                imageUrl:fetchedData.image_url,
                title:fetchedData.title,
                rating:fetchedData.rating,
                description:fetchedData.description,
                brand:fetchedData.brand,
                totalReviews:fetchedData.total_reviews,
                availability:fetchedData.availability,
                price:fetchedData.price,
            
            similarProducts:fetchedData.similar_products.map((data)=>({
                id:data.id,
                price:data.price,
                imageUrl:data.image_url,
                title:data.title,
                rating:data.rating,
                description:data.description,
                brand:data.brand,
                totalReviews:data.total_reviews,
                availability:data.availability,
                style:data.style
            }))
        }
       
           this.setState({
            isLoading:false,
            productData:updatedData,
            
           })
        }
    }
    addItem=()=>{
        const{count}=this.state
       this.setState((prevState)=>({
        count:prevState.count+1
       })
            
       )
    }
    subItem=()=>{
        const{count}=this.state
       this.setState((prevState)=>({
        count:prevState.count-1
       })
            
       )
    }
   

    renderProDetails=()=>{
        const{productData,count}=this.state
       const{similarProducts}=productData
        const{imageUrl,title,brand,rating,description,availability,totalReviews,price}=productData
        return(
            <div className='mian'>
            <div className='container'>
                <div className='one'>
                    <img src={imageUrl} className='pimage' alt="geteimage"/>
                </div>
                <div className='two'>
                    <h2>{title}</h2>
                    <h5>RS {price}/-</h5>
                    <div className='three'>
                        <p className='rat'>{rating}</p>
                        <p> {totalReviews} Reviews</p>
                    </div>
                    <p className='description'>{description}</p>
                    <div className='available'>
                        <h3 style={{fontWeight:"bold"}}>Available:</h3>
                        <p> {availability}</p>
                    </div>
                    <div className='available'>
                        <h3 style={{fontWeight:"bold"}}>Brand: </h3>
                        <p> {brand}</p>
                    </div>
                    <hr/>
                    <div className='count'>
                    <button className='sub'  onClick={this.subItem}>-</button>
                    <p>
                            {count}
                        </p>
                        <button className='add' onClick={this.addItem}>+</button>
                       
                       
                    </div>
                </div>
               
            </div>
            <h1>Similar Products</h1>
            <div className='similarcontainer'>
           {similarProducts.map((details)=>(
            <Similarproducts details={details} key={details.id}/>
           ))}
           </div>
            </div>
        )
    }
    
    render(){
        const{isLoading}=this.state
        //const{similarProducts}=productData
        //console.log(productData)
        //console.log(similarProducts)
        return(
            <>
                <Header/>
                {isLoading?<Loader type="ThreeDots" color="#00bfff" height={50} width={50}/>:<p>{this.renderProDetails()}</p>}
            </>
        )
    }
}
export default Productdetails