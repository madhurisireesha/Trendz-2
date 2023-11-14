import './index.css'
const Categories=(props)=>{
  //  console.log(props)
    const{category,renderCategory}=props
    const{name, categoryId}=category
    const clickCategory=()=>{
        renderCategory(categoryId)
    }
    return(
        <ul className="catlist">
            <button onClick={clickCategory} className='catbut'>{name}</button>
            
        </ul>
    )
}
export default Categories