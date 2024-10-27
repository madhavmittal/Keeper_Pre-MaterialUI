import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({ head: "", body: "" });

  function handleChange(e) {
    const { value, name } = e.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function addNote(e) {
    e.preventDefault();
    setNotes((prevItems) => {
      return [...prevItems, note];
    });
    setNote({ head: "", body: "" });
  }

  function deleteNote(id) {
    setNotes((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} note={note} onActivity={handleChange} />
      {notes.map((x, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={x.head}
            content={x.body}
            removeNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
