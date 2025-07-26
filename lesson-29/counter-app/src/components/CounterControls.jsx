import { useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

const CounterControls = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())} style={buttonStyle}>
        +
      </button>
      <button onClick={() => dispatch(decrement())} style={buttonStyle}>
        -
      </button>
    </div>
  );
};

const buttonStyle = {
  padding: "10px",
  margin: "5px",
  fontSize: "16px",
  cursor: "pointer",
};

export default CounterControls;
