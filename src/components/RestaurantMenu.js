import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Params, useParams } from "react-router-dom";
import { menu_API } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null); 
  const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

  const fetchMenu = async () => {
    const data = await fetch(menu_API+resId);
    const json = await data.json();
    const main = json.data;
    setresInfo(main);
    console.log(main)
  };

  if (resInfo === null) {
    return <Shimmer/>
  }

  const { name, city, areaName, costForTwoMessage, cuisines, avgRatingString } = resInfo?.cards[2]?.card?.card?.info;
  
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
    return (
      <div className="menu">
        <h1>{name}</h1>
        <h3>{areaName} - {city}</h3>
        <p>{cuisines.join(', ')}</p>
        <p>{costForTwoMessage}</p>
        <p>{avgRatingString}</p>
        <h2>----Menu----</h2>
        <ul>
            {itemCards && itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name}     - {"Rs."} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
            ))} 
        </ul>
      </div>
    );
}

export default RestaurantMenu;