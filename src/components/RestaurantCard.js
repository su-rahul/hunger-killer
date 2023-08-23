import { CLOUDINARY_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="Restaurant Logo"
        className="res-logo"
        src={CLOUDINARY_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>Ratings: {avgRating}*</h4>
      <h4>Delivery Time: {sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
