import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  //how to read a dynamic URL
  const params = useParams();
  const { id } = params;

  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const ResData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=594685&catalog_qa=undefined&submitAction=ENTER"
    );
    const json1 = await ResData.json();
    console.log(json1?.data);
    setRestaurant(json1.data);
  }

  return (
    <div className="restaurant-menu">
      <h1>Restaurant Id : {id}</h1>
      <h1>Namaste!</h1>
    </div>
  );
};

export default RestaurantMenu;
