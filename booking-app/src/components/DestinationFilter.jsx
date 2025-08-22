import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDestinations,
  filterDestinations,
} from "../features/destinations/actions";

const DestinationFilter = () => {
  const dispatch = useDispatch();
  const destinations = useSelector(
    (state) => state.destinations.filteredDestinations
  );
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    dispatch(filterDestinations(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Введите название города"
        value={query}
        onChange={handleInputChange}
      />
      <ul>
        {destinations.map((destination) => (
          <li key={destination.id}>{destination.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationFilter;
