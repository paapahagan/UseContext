import React from "react";
import CompC from "./components/CompC";

export const userContext = React.createContext();
export const channelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <userContext.Provider value={"Pee kay"}>
        <channelContext.Provider value={"hard guys"}>
          <CompC />
        </channelContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default App;
