import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";

const App = () => {
  return (
    <div style={wrapperStyle}>
      <CounterDisplay />
      <CounterControls />
    </div>
  );
};

const wrapperStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  width: "150px",
  textAlign: "center",
  fontFamily: "Arial",
};

export default App;
