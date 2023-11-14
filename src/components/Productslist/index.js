import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Productcard from '../Productcard'
import Categories from '../Categories'
import Rating from '../Rating'
import './index.css'
const categoryOptions = [
    {
      name: 'Clothing',
      categoryId: '1',
    },
    {
      name: 'Electronics',
      categoryId: '2',
    },
    {
      name: 'Appliances',
      categoryId: '3',
    },
    {
      name: 'Grocery',
      categoryId: '4',
    },
    {
      name: 'Toys',
      categoryId: '5',
    },
  ]
  
  const sortbyOptions = [
    {
      optionId: 'PRICE_HIGH',
      displayText: 'Price (High-Low)',
    },
    {
      optionId: 'PRICE_LOW',
      displayText: 'Price (Low-High)',
    },
  ]
  
  const ratingsList = [
    {
      ratingId: '4',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
    },
    {
      ratingId: '3',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
    },
    {
      ratingId: '2',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
    },
    {
      ratingId: '1',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
    },
  ]
  
 
  
class Productslist extends Component{
    state={
        isLoading:true,
        categoryList:[],
        ratingList:[],
        category:'',
        list1:[],
        searchInput:'',
        rating:''
    }
    componentDidMount(){
        this.getProducts()
    }
    getProducts=async()=>{
      const{category,searchInput,rating}=this.state
      //console.log(searchInput)
        const url=`https://apis.ccbp.in/products?category=${category}&title_search=${searchInput}&rating=${rating}`
        const jwttoken=Cookies.get('token')
        const options={
            headers:{
                Authorization:`Bearer ${jwttoken}`
            },
            method:'GET'
        };
        const response=await fetch(url,options)
        if(response.ok===true)
        {
            const fetchedData=await response.json()
            
            const updatedData=fetchedData.products.map((product)=>({
                title:product.title,
                brand:product.brand,
                id:product.id,
                price:product.price,
                imageUrl:product.image_url,
                rating:product.rating
            }))
            this.setState({
                list1:updatedData,
                isLoading:false,
                categoryList:categoryOptions
            })
        }

    }
    renderProductsList=()=>{
      const{categoryList}=this.state
      
        const{list1}=this.state
        return(
          <>
           
            <div className='first'>
            
               <div className='butt'>
               <input type="search" placeholder='Search' onChange={this.onChangeSearchInput}/>
               <h3 style={{marginLeft:"40px", fontWeight:"bold"}}>Category</h3>
             {categoryList.map((category)=>(
                <Categories category={category} renderCategory={this.renderCategory}/>
             ))}
             {ratingsList.map((rating)=>(
              <Rating rating={rating} key={rating.ratingId} getRating={this.getRating}/>
             ))}
             <button className='clear' onClick={this.clearFilter}>Clear Filters</button>
              </div> 
              
            
                <ul className='prolist1'>
                    {list1.map((product)=>(
                        <Productcard data={product} key={product.id}/>
                    ))}
                </ul>
                
            </div>
        </>
        )
    }
    renderCategory=(id)=>{
      
      this.setState({
        category:id,isLoading:false
      },this.getProducts)
    }
    onChangeSearchInput=(event)=>{
      this.setState({
        searchInput:event.target.value,
        isLoading:false
      },this.getProducts)
      //console.log(event.target.value)
    }
    getRating=(id)=>{
      this.setState({
        rating:id,
        isLoading:false
      },this.getProducts)
    }
    clearFilter=()=>{
      
      this.setState({
        rating:'',
        category:'',
        searchInput:'',
        isLoading:false
      },this.getProducts)
     
    }
    render(){
        const{isLoading}=this.state
        
        return(
            <div className='first'>
             
            {isLoading?<Loader type="ThreeDots" color="#0b69ff" height="50" width="50"/>:
            
            this.renderProductsList()
            } 
           
           
            
            </div>
        )
    }

}
export default Productslist