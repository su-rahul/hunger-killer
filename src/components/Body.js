import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  const [toFilterlistOfRestaurants, setToFilterListOfRestaurants] = useState(
    []
  );
  const [toRenderListOfRestaurants, setToRenderListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960853008545717&lng=77.74166207760572"
    );
    let jsonData = await data.json();
    console.log("jsonData==================>", jsonData?.data?.cards[2].card);
    let restList =
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setToFilterListOfRestaurants(restList);
    setToRenderListOfRestaurants(restList);
  };

  const searchRestaurants = (searchText) => {
    let newResList = toFilterlistOfRestaurants.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setToRenderListOfRestaurants(newResList);
  };

  return toRenderListOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="searchBtn"
            onClick={() => {
              searchRestaurants(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredResList = toFilterlistOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setToRenderListOfRestaurants(filteredResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {toRenderListOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.info?.id}
            resData={restaurant.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
