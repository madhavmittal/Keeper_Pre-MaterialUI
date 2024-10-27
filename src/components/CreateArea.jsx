import React, { useState } from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          name="head"
          placeholder="Title"
          value={props.note.head}
          onChange={props.onActivity}
        />
        <textarea
          name="body"
          placeholder="Take a note..."
          rows="3"
          value={props.note.body}
          onChange={props.onActivity}
        />
        <button onClick={props.onAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
