import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from "@material-ui/core";

function Note(props) {

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <IconButton onClick={ () => {
        props.deleteNote(props.id)
      }}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default Note;
