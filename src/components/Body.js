import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("INSIDE USEFFECT");
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("Fetching data");
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      const restaurants =
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRestaurants(restaurants); // Set the fetched data in state
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  if (listOfRestaurants.length === 0) return <Shimmer />;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const searchedList = listOfRestaurants.filter(
                (res) =>
                  res.info?.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) // Added optional chaining
              );

              setFilteredRestaurants(searchedList);
              console.log(searchedList);
            }}
          >
            Search
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info?.avgRating > 4 // Added optional chaining
              );

              setFilteredRestaurants(filteredList);
              console.log(filteredList); // Log the filtered restaurant data
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurants.map(
          (restaurant) =>
            restaurant.info ? ( // Added check for existence of data
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ) : null // Return null if restaurant.data doesn't exist
        )}
      </div>
    </div>
  );
};

export default Body;
