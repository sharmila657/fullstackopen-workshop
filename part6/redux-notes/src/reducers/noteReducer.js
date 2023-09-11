const noteReducer = (state = [], action) => {
  switch (action. type) {
    case "NEW_NOTE":{
      const newState = state.concat(action.payload);
      return newState;
  }
    case "TOGGLE_IMORTANCE":{
    let myNote = state.find(note => note.id === action.payload.id)
    let changedNote = {...myNote, important:!myNote.important }
    // myNote.important = !myNote.important;
    return state.map((note) =>
     note.id === changedNote.id ? changedNote : note
    );
  }

    default:
      return state;
  }
};
export default noteReducer;
