import React, { useReducer } from "react";
import CompA from "./components/CompA";
import CompB from "./components/CompB";
import CompC from "./components/CompC";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countSate: count, countDispatch: dispatch }}
    >
      <div className="App">
        Count - {count}
        <CompA />
        <CompB />
        <CompC />
      </div>
    </CountContext.Provider>
  );
}

export default App;
