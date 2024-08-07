import React from "react";
import { MdDeleteForever } from 'react-icons/md'

function CreateNote ({ textHandler, saveHandler, inputText }) {

    return (
        <div className="note">
            <textarea cols="43" rows="13" value={inputText} placeholder='...' onChange={textHandler} maxLength="100"></textarea>
            <div className="note-footer">
                <span> <MdDeleteForever className="delete" /></span>
                <button className="save" onClick={saveHandler} >Save</button>
            </div>
        </div>
    )
}

export default CreateNote;

