import NameDisplay from "./NameDisplay";
let peopleArray = [
    { firstName: "Rushil", lastName: "Shakya", id: 201 },
    { firstName: "Sharmila", lastName: "Jirel", id: 202 },
    { firstName: "Arju", lastName: "Pariyar", id: 203 }


]


let App = () => {
    // return React.createElement("div", {}, [
    //   React.createElement(nameDisplay, { firstName: "Sharmila" }),
    //   React.createElement(nameDisplay, { firstName: "Arju" }),
    //   React.createElement(nameDisplay, { firstName: "Liza" }),
    // ]);
    return (
        <div>
            {peopleArray.map((value) => (
                <NameDisplay person={value}
                key={value.id} />
               ))}
            

            {/* <NameDisplay firstName={peopleArray[0].firstName} lastName={peopleArray[0].lastName} />
            <NameDisplay firstName={peopleArray[1].firstName} lastName={peopleArray[1].lastName} />
            // <NameDisplay firstName={peopleArray[2].firstName} lastName={peopleArray[2].lastName} /> */}
        </div>
    )
};
  
export default App;