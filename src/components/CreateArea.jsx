import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import uniqid from 'uniqid';

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: "",
    id: ""
  });


  function handleChange(event) {
    const { name, value } = event.target;
    
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    const noteId = uniqid();
    props.onAdd({...note, id: noteId});
    setNote({
      title: "",
      content: "",
      id: ""
    });
    event.preventDefault();
  }

  const [isFocus, setIsFocus] = useState(false);
  function handleFocus() {
    setIsFocus(true)
  }

  return (
    <div>
      <form className="create-note">
        { isFocus && (
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
            />
          )}
        <textarea
          name="content"
          onFocus={handleFocus}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows= {isFocus ? 3 : 1}
        />
        <Zoom in={isFocus}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
