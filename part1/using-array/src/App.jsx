import NameDisplay from "./NameDisplay";


let App = () => {
    // return React.createElement("div", {}, [
    //   React.createElement(nameDisplay, { firstName: "Sharmila" }),
    //   React.createElement(nameDisplay, { firstName: "Arju" }),
    //   React.createElement(nameDisplay, { firstName: "Liza" }),
    // ]);
    return (
        <div>
            <NameDisplay firstName="Sharmila" />
            <NameDisplay firstName="Arju" />
            <NameDisplay firstName="Liza" />


        </div>
    )
};
  
export default App;