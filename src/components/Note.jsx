import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from "@material-ui/core";
import { confirmAlert } from 'react-confirm-alert'; // Import

function Note(props) {

  function submit() {
    confirmAlert({
      title: 'Delete?',
      message: "This action can't be undone.",
      buttons: [
        {
          label: 'Delete',
          onClick: () => props.deleteNote(props.id)
        },
        {
          label: 'Nah',
        }
      ]
    });
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <IconButton onClick={submit}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default Note;
