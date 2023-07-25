let NameDisplay = (props) => {
    return React.createElement("h1", { id: "myId" }, `Hello! ${props.firstName}`);
  };
  let App = () => {
    return React.createElement("div", {}, [
      React.createElement(NameDisplay, { firstName: "Sharmila" }),
      React.createElement(NameDisplay, { firstName: "Arju" }),
      React.createElement(NameDisplay, { firstName: "Liza" }),
    ]);
  };
  let container = document.getElementById("root");
  let root = ReactDOM.createRoot(container);
  
  root.render(React.createElement(App));