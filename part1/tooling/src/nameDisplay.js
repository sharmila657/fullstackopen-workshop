import React from "react";

let nameDisplay = (props) => {
    return React.createElement("h1", { id: "myId" }, `Hello! ${props.firstName}`);
};
  
export default nameDisplay;
