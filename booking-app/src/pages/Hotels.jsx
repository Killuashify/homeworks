import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectHotels,
  selectHotelsLoading,
} from "../features/hotels/selectors";
import styles from "./Hotels.module.scss";

const Hotels = () => {
  const hotels = useSelector(selectHotels);
  const loading = useSelector(selectHotelsLoading);
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => setQuery(e.target.value);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

  const renderHotels = () => {
    if (loading) return <div className={styles.loading}>Loading hotels...</div>;
    if (!hotels || !Array.isArray(hotels))
      return <div className={styles.noHotels}>No hotels found</div>;

    const filtered = hotels.filter(
      (hotel) =>
        hotel.city.toLowerCase().includes(query.toLowerCase()) ||
        hotel.name.toLowerCase().includes(query.toLowerCase())
    );

    return filtered.map((hotel) => (
      <li key={hotel.id} className={styles.hotelItem}>
        <h3>{hotel.name}</h3>
        <p>
          {hotel.address}, {hotel.city}
        </p>
        <div className={styles.rating}>{renderStars(hotel.hotel_rating)}</div>
        {hotel.phone_number && (
          <p className={styles.phone}>📞 {hotel.phone_number}</p>
        )}
      </li>
    ));
  };

  return (
    <div className={styles.hotelsContainer}>
      <div className={styles.hotelsSection}>
        <h2>Available Hotels:</h2>

        <input
          type="text"
          placeholder="Search by city or name..."
          value={query}
          onChange={handleInputChange}
          className={styles.searchInput}
        />

        <ul className={styles.hotelsList}>{renderHotels()}</ul>
      </div>
    </div>
  );
};

export default Hotels;
