import './index.css'
const Rating=(props)=>{
   
    const{rating,getRating}=props
    const{ imageUrl,ratingId}=rating
   const  setRating=()=>{
        getRating(ratingId)
    }
    return(
        <div className="ratingcontainer">
        <img src={imageUrl} alt="image" className='rating' onClick={setRating}/>
        <h3 style={{fontWeight:"bold",color:"skyblue"}}>{ratingId}</h3>

        </div>
    )
}
export default Rating