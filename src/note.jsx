import React from "react";
import { MdDeleteForever } from "react-icons/md";

function Note ({ id, text, deleteNote }) {
    return (
        <div className="note">
            <div className="notecard">{text}</div>
            <div className="note-footer">
            <MdDeleteForever onClick={() => deleteNote(id)} aria-hidden="true" className="delete" />
            </div>
        </div>
    )
};

export default Note;