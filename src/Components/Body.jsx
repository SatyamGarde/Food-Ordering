import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/mockData";
import { useEffect, useRef, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";


const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [FilteredRestaurant, setFilteredRestaurants] = useState([]);
  const [SearchText, setSearchText] = useState("");

  // Fetch data part is remaining
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );

    // const json = await data.json();

    // console.log(json);
    // setListOfRestaurants(json.data.cards[4].card.card.gridElements);

    //Optional Chenging
    setListOfRestaurants(resList);
    setFilteredRestaurants(resList);
  };

  const handleFilterTopRated = () => {
    const filteredList = ListOfRestaurants.filter(
      (res) => res.data.avgRating > 4
    );
    setFilteredRestaurants(filteredList);
  };

  if (ListOfRestaurants == 0) {
    return <Shimmer />;
    // return <h1>Loading....</h1>
  }
  const desiredWidth = "calc(180.4vh)";
  return (
    <div className="body">
      <HomePage/>
      <div className="search-container " style={{width: desiredWidth }}>
        <input
          className="inp"
          type="text"
          value={SearchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Food or Restaurant"
        />
        <button
          className="btn"
          onClick={() => {
            console.log(SearchText);

            const filteredRestaurants = ListOfRestaurants.filter(
              (restaurant) =>
                // console.log(restaurant.data.cuisines)

                restaurant.data.cuisines.some((cuisine) =>
                  cuisine.toLowerCase().includes(SearchText.toLowerCase())
                ) ||
                restaurant.data.name
                  .toLowerCase()
                  .includes(SearchText.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Search
        </button>
        <button className="Filter" onClick={handleFilterTopRated}>
          Top Rated
        </button>
      </div>

      <div className="res-container">
        {FilteredRestaurant.map((restaurant) => (
          <Link
            className="linktag"
            key={restaurant.data.id}
            to={`/restaurants/${restaurant.data.id}`}
          >
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;