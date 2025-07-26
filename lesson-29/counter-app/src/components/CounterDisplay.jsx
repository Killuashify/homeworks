import { useSelector } from "react-redux";

const CounterDisplay = () => {
  const value = useSelector((state) => state.counter.value);

  return (
    <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
      <strong>Value: {value}</strong>
    </h1>
  );
};

export default CounterDisplay;
