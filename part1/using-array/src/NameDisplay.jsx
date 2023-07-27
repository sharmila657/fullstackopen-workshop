
let NameDisplay = ({person:{firstName, lastName, id}}) => {
    
    // return React.createElement("h1", { id: "myId" }, `Hello! ${props.firstName}`);
    return (
        <h1 id="myID">
            Hello {firstName} {lastName} {id}
        </h1>
    );
};
  
export default NameDisplay;
