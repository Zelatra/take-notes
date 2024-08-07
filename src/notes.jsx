import Note from "./note";
import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import CreateNote from "./createNote";




function Notes () {

    

    const [notes, setNotes] = useState([]);
    const [inputText, setInputText] = useState("");

    const textHandler = (e) => {
    setInputText(e.target.value);
}

    const saveHandler = () => {
    setNotes((prevState) => [
    ...prevState,
    {
    id: uuid(),
    text: inputText,
    },
]);

    setInputText("");
};

const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
};

    
    return (
        <div className="notes">
            <body>
            {notes.map((note) =>
            <Note
            key={note.id}
            id={note.id}
            text={note.text}
            deleteNote={deleteNote}
                />
            )}
            <CreateNote
                textHandler={textHandler}
                saveHandler={saveHandler}
                inputText={inputText} />
            </body>
        </div>
    )
}

export default Notes;