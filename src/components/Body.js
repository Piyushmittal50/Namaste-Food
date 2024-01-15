import React, { useState, useEffect } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  //const filterTopRated = () => {
  // const filtered = resObj.restaurantCarts.filter((res) => res.rating > 4.5);
  //setFilteredRes(filtered);
  //};
  const [searchText, setSearchText] = useState("");
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7723852&lng=75.8588375&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();

    //optional chaining
    const restaurants =
      jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRes(restaurants);
    setfilteredRestaurant(restaurants);
  };

  // conditional rendering
  if (!listOfRes || listOfRes.length === 0) {
    return <Shimmer></Shimmer>;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="button-search"
            onClick={() => {
              const filteredRes = listOfRes.filter((res) => {
                const restaurantName = res.info.name.toLowerCase();
                const searchTextLower = searchText.toLowerCase();
                return restaurantName.includes(searchTextLower);
              });

              setfilteredRestaurant(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRes.filter(
              (res) => res.info.avgRating > 4.2
            );
            //setListOfRes(filterList);
             setfilteredRestaurant(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.info.id}>
            <ResCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
