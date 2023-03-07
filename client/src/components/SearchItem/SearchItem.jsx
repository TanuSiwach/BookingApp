import "./searchitem.css"

const SearchItem=()=> {

    return (
        <div className="searchItem">
           <img src="https://media.designcafe.com/wp-content/uploads/2021/09/27095756/bedroom-design-with-window-bay-seating.jpg" 
           alt=""  
           className="siImg"
           />        
          <div className="siDesc">
            <h1 className="siTitle">Tower Street  Apartments</h1>
            <span className="siDistance"> 500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle"> 
            Studio Apartment with conditioning
            </span>
            <span className="siFeatures"> 
            Entire Studio &#183; 1 bathroom &#183; 21m<sup className="subb" >2</sup> 1 king size bed
            </span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
          </div>
          <div className="siDetails"> 
           <div className="siRating">
             <span>Excellent</span>
             <button>8.9</button>
           </div>
           <div className="siDetailsTexts">
             <span className="siPrice"> &#8377; 1000</span>
             <span className="siTaxOp"> Includes Tax and Fees</span>
             <button className="siCheckButton"> See Availability</button>
           </div>
          </div>
        </div>
    )
}
export default SearchItem;