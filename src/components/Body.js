import React, {useState} from "react";
import ResCard from "./ResCard";
import resObj from "../utils/mockData";
 const Body = () => {
     const listOfRes = [
        {
            data: {
                id: "334475",
                resName: "Dominos", 
                cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
                cusine: "Mexican",
                delTime: "45 minutes",
                rating: 4.2
            }
        },
         {
            data: {
                id: "334476",
                resName: "KFC",
                cloudinaryImageId: "258fe8a3577877fbfe064095ed1d9dc3",
                cusine: "American",
                delTime: "40 minutes",
                rating: 3.2
            }
        },
            {
            data: {
                id: "334477",
                resName: "Kaash",
                cloudinaryImageId: "thfmjr9vav3tye3ce9xw",
                cusine: "Nepal",
                delTime: "40 minutes",
                rating: 4.9
            }
        }
    ];
    
      const [filteredRes, setFilteredRes] = useState(resObj.restaurantCarts);

      const filterTopRated = () => {
        const filtered = resObj.restaurantCarts.filter((res) => res.rating > 4.5);
        setFilteredRes(filtered);
      };
     
     
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={filterTopRated}>
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
          {filteredRes.map((restaurant) => (
            <ResCard key={restaurant.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
};

export default Body;