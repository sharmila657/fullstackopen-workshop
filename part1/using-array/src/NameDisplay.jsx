
let NameDisplay = ({person}) => {
    
    // return React.createElement("h1", { id: "myId" }, `Hello! ${props.firstName}`);
   
    const getFullName = () => `${person.firstName} ${person.lastName}`;
   
    return (
        <h1 id="myID">
            Hello {getFullName()}
            {/* Hello {person.firstName} {person.lastName} {person.id} */}
        </h1>
    );
};
  
export default NameDisplay;
