import { Link } from "react-router-dom";
import "./searchitem.css"

const SearchItem=({item})=> {

    return (
        <div className="searchItem">
           <img src={item.photos[0]}
           alt=""  
           className="siImg"
           />        
          <div className="siDesc">
            <h1 className="siTitle">{item.name}</h1>
            <span className="siDistance"> {item.distance}</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle"> 
            Studio Apartment with conditioning
            </span>
            <span className="siFeatures"> {item.desc}
            </span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
          </div>
          <div className="siDetails"> 
          {item.rating && <div className="siRating">
             <span>Excellent</span>
             <button>{item.rating}</button>
           </div>}
           <div className="siDetailsTexts">
             <span className="siPrice"> &#8377; {item.cheapestPrice} </span>
             <span className="siTaxOp"> Includes Tax and Fees</span> 
             <Link to={`/hotels/${item._id}`}>
             <button className="siCheckButton"> See Availability</button>
             </Link>
           </div>
          </div>
        </div>
    )
}
export default SearchItem;