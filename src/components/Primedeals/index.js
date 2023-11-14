
import { Component } from "react";
import Cookies from "js-cookie";
import Loader from "react-loader-spinner";
import Productcard from "../Productcard";
import './index.css'
const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class Primedeals extends Component{
    state={
        list2:[],
        isLoading:true,
        status:apiStatusConstants.initial
    }
    componentDidMount(){
        this.getProducts()
    }
    getProducts=async()=>{
        this.setState({
            isLoading:false,
            status:apiStatusConstants.inProgress
        })
        const token=Cookies.get('token')
        const url='https://apis.ccbp.in/prime-deals'
        const options={
            headers:{
                Authorization:`Bearer ${token}`
            },
            method:'GET',
        }
        const response=await fetch(url,options)
       if(response.ok===true)
       {
        const fetchedData=await response.json()
        const updatedData=fetchedData.prime_deals.map(product => ({
         title: product.title,
         brand: product.brand,
         price: product.price,
         id: product.id,
         imageUrl: product.image_url,
         rating: product.rating,
       }))
       this.setState({
        list2:updatedData,
        status:apiStatusConstants.success,
        isLoading:false
       })
       }
       if(response.status===401){
        this.setState({
            status:apiStatusConstants.failure
        })
       }
    }
    renderPrimeList=()=>{
        const {list2} = this.state
     return (
      <div>
         <h1 className="primedeals-list-heading">Exclusive Prime Deals</h1>
         <ul className="prolist1">
           {list2.map(product => (
             <Productcard data={product} key={product.id} />
           ))}
         </ul>
       </div>
     )
    }
      renderPrimeDealsFailureView = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
      alt="Register Prime"
      className="register-prime-image"
    />
  )

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {status} = this.state
    switch (status) {
      case apiStatusConstants.success:
        return this.renderPrimeList()
      case apiStatusConstants.failure:
        return this.renderPrimeDealsFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }
}

export default Primedeals
    


//     const apiUrl = 'https://apis.ccbp.in/prime-deals'
//     const options = {
//       headers: {
//         Authorization: `Bearer ${jwtToken}`,
//       },
//       method: 'GET',
//     }
//     const response = await fetch(apiUrl, options)
//     if (response.ok === true) {
//       const fetchedData = await response.json()
//       const updatedData = fetchedData.prime_deals.map(product => ({
//         title: product.title,
//         brand: product.brand,
//         price: product.price,
//         id: product.id,
//         imageUrl: product.image_url,
//         rating: product.rating,
//       }))
//       this.setState({
//         primeDeals: updatedData,
//         apiStatus: apiStatusConstants.success,
//       })
//     }
//     if (response.status === 401) {
//       this.setState({
//         apiStatus: apiStatusConstants.failure,
//       })
//     }
//   }

//   renderPrimeDealsList = () => {
//     const {primeDeals} = this.state
//     return (
//       <div>
//         <h1 className="primedeals-list-heading">Exclusive Prime Deals</h1>
//         <ul className="products-list">
//           {primeDeals.map(product => (
//             <Productcard data={product} key={product.id} />
//           ))}
//         </ul>
//       </div>
//     )
//   }

//   renderPrimeDealsFailureView = () => (
//     <img
//       src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
//       alt="Register Prime"
//       className="register-prime-image"
//     />
//   )

//   renderLoadingView = () => (
//     <div className="products-loader-container">
//       <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
//     </div>
//   )

//   render() {
//     const {apiStatus} = this.state
//     switch (apiStatus) {
//       case apiStatusConstants.success:
//         return this.renderPrimeDealsList()
//       case apiStatusConstants.failure:
//         return this.renderPrimeDealsFailureView()
//       case apiStatusConstants.inProgress:
//         return this.renderLoadingView()
//       default:
//         return null
//     }
//   }
// }

// export default Primedeals