import { useEffect, useState } from "react";
import resList from "../Utils/mockData";
import { useParams, Link } from "react-router-dom";
import { CDN_URL } from "../Utils/constants";
import Recommanded from "./Recommanded";
const RestaurantMenu = () => {
  const [Resinfo, setResinfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setResinfo(resList);
  };

  //To find the index of array by id
  const findId = () => {
    return Resinfo.findIndex((item) => item.data.id === id);
  };


//To scroll resmenu on top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const indexOfData = findId();
  return (
    <div className="body">
      <li className="menu-name">{Resinfo[indexOfData]?.data?.name}</li>
      <hr className="border-t-2 border-gray-300 my-4"></hr>
      <div className="menu ">
        <div className="menu-first">
          <img
            className="menu-img "
            src={CDN_URL + Resinfo[indexOfData]?.data?.cloudinaryImageId}
          />

          <div className="menu-details">
            <h2 className="menu-details-name ">
              {Resinfo[indexOfData]?.data?.name}
            </h2>
            <li>{Resinfo[indexOfData]?.data.address}</li>
            <div>
              <hr className="border-t-2 border-gray-300 my-4"></hr>
            </div>
            <div className="menu-price">
              <li>{Resinfo[indexOfData]?.data.slaString}</li>
              <li>{Resinfo[indexOfData]?.data.costForTwoString}</li>
            </div>
          </div>
          <div className="menu-Ratings">
            <li>{Resinfo[indexOfData]?.data.avgRating}</li>
            <div className="bline">----------------</div>
            <li>
              {Resinfo[indexOfData]?.data?.totalRatings
               ? `${Resinfo[indexOfData]?.data?.totalRatings /1000}k+ ratings`
               : `${Resinfo[indexOfData]?.data?.totalRatingsString} ratings`}
            </li>
          </div>
        </div>

        <h2>Menu</h2>

        <ul>
          {Resinfo.map((item) => (
            <li key={item.data.id}>{item.data.cuisines.join(", ")}</li>
          ))}
        </ul>
        <hr className="border-t-2 border-gray-300 my-4"></hr>
        <div>
          <h1>Recommanded</h1>
          <div>

        {Resinfo.map((restaurant) => (
          <Link
            className="linktag"
            key={restaurant.data.id}
            onClick={scrollToTop}
            to={`/restaurants/${restaurant.data.id}`}
          >
            <Recommanded key={restaurant.data.id} resData={restaurant} />
          </Link>
        ))}
      </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
