import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setHotels } from "../features/hotels/hotelsSlice";
import styles from "./Main.module.scss";

const Main = () => {
  const [destinations, setDestinations] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/destination")
      .then((res) => setDestinations(res.data))
      .catch((err) => console.error("Error fetching destinations:", err));
  }, []);

  const required = (value) => (value ? undefined : "Required");

  const onSubmit = async (values) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/hotels?city=${values.destination}`
      );

      dispatch(setHotels(res.data));
      navigate("/hotels");
    } catch (err) {
      console.error("Error fetching hotels:", err);
    }
  };

  return (
    <div className={styles.main}>
      <h1>Find Your Hotel</h1>

      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <label>Destination</label>
              <Field name="destination" validate={required} component="select">
                <option value="">Select destination</option>
                {destinations.map((dest) => (
                  <option key={dest.id} value={dest.label}>
                    {dest.label}
                  </option>
                ))}
              </Field>
            </div>

            <div>
              <label>Check-in date</label>
              <Field
                name="checkin"
                validate={required}
                component="input"
                type="date"
              />
            </div>

            <div>
              <label>Check-out date</label>
              <Field
                name="checkout"
                validate={required}
                component="input"
                type="date"
              />
            </div>

            <button type="submit">Send</button>
          </form>
        )}
      />
    </div>
  );
};

export default Main;
