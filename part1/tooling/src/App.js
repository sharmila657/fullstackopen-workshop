import React from "react";
import nameDisplay from "./nameDisplay";


let App = () => {
    return React.createElement("div", {}, [
      React.createElement(nameDisplay, { firstName: "Sharmila" }),
      React.createElement(nameDisplay, { firstName: "Arju" }),
      React.createElement(nameDisplay, { firstName: "Liza" }),
    ]);
};
  
export default App;