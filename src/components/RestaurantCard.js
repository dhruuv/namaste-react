import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  // Destructure with fallback values to avoid undefined errors
  const {
    cloudinaryImageId = "",
    name = "Unknown Restaurant",
    cuisines = [],
    avgRating = "N/A",
    costForTwo = 0,
  } = resData?.info || {};

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt={name} // Improved alt text for accessibility
        style={{ width: "100%", height: "auto" }} // Optional: make image responsive
      />

      <h3>
        <b>{name}</b>
      </h3>
      <h4>
        {cuisines.length > 0 ? cuisines.join(", ") : "No cuisines available"}
      </h4>
      <h4>
        {avgRating !== "N/A" ? `${avgRating} stars` : "Rating not available"}
      </h4>
    </div>
  );
};

export default RestaurantCard;
