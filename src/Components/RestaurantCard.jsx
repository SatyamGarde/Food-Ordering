import { CDN_URL } from "../Utils/constants";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const RestaurantCard = (props) => {
  const { resData } = props;

  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwoString,
    deliveryTime,
    costForTwo,
  } = resData?.data;

  return (
    <div
      data-aos="zoom-in-up"
      className="res-card"
    >
      <img
        className="res-logo "
        src={CDN_URL + cloudinaryImageId}
        alt="Biryani"
      />

      <div className="card-name">{name}</div>
      <div className="card-rating">
        <h4>{avgRating} stars</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
      <div className="card-cuisines">{cuisines.join(", ")}</div>

      <h4 className="card-price">{costForTwoString || costForTwo}</h4>
    </div>
  );
};
export default RestaurantCard;