import { useEffect } from "react";
const RestaurantMenu = () => {
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7723852&lng=75.8588375&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);  
    }
    return (
      <div className="menu">
        <h1>Restaurant Name</h1>
        <ul>
          <li>Biryni</li>
          <li>Biryni</li>
          <li>Biryni</li>
        </ul>
      </div>
    );
}

export default RestaurantMenu;