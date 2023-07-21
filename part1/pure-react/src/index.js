let nameDisplay = (props) => {
    return React.createElement("h1", { id: "myId" }, `Hello! ${props.firstName}`);
  };
  let App = () => {
    return React.createElement("div", {}, [
      React.createElement(nameDisplay, { firstName: "Sharmila" }),
      React.createElement(nameDisplay, { firstName: "Arju" }),
      React.createElement(nameDisplay, { firstName: "Liza" }),
    ]);
  };
  let container = document.getElementById("root");
  let root = ReactDOM.createRoot(container);
  
  root.render(React.createElement(App));