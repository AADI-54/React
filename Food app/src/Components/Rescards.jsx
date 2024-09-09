import { cdnurl } from "../Utils/constants";
const Card = (props) =>{
    const{resdata} = props;
    const{
        name,
        dish,
        cuisines,
        areaName,
        avgRating,
        locality,
        costForTwo,
        deliveryTime,
        contact,
        cloudinaryImageId,
    }=resdata;
    return(
     <div className="food-cards-container">
      <div className="food-card">
        <img src={cloudinaryImageId} alt="Image of restaurant" className="food-image" />
        <div className="food-card-content">
          <h3 className="food-title">{name}</h3>
          <div className="food-rating">
            <span className="star">⭐</span>
            <span className="delivery-time">{avgRating} · 45-50 mins</span>
          </div>
          <p className="food-description">{cuisines}...</p>
          <p className="food-location">{locality}</p>
          <p className="food-price">{costForTwo}</p>
        </div>
      </div>
      </div>
    )
}
export default Card;