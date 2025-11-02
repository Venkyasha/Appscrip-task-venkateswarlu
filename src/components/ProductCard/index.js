import heart from "../../images/heart.png"
import "./index.css"

const ProductCard=props=>{
    const {productDeatils}=props
    const {image,title}=productDeatils

    return (
        <li className="product-card">
            <img src={image} alt={`Images of ${title}`}  className="pro-img"/>
            <h1 className="pro-title">{title}</h1>
            <div className="pro-sub">
                <p className="pro-para">Sign in or Create an account to see pricing</p>
                <img src={heart} alt="fav" className="fav-logo"/>
            </div>
        </li>
    )
}
export default ProductCard