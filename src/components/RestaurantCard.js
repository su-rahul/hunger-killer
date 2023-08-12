import { CLOUDINARY_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={CLOUDINARY_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rs {costForTwo / 100}/- For 2</h4>
      <h4>Ratings: {avgRating}*</h4>
      <h4>Delivery Time: {deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
