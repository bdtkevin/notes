import { useState } from 'react';
import axios from 'axios';
import SNote from './styled/SNote';

export default function Note({ id, pTitle, pNote, getNotes, darkmode }) {
  const [title, setTitle] = useState(pTitle);
  const [note, setNote] = useState(pNote);
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleNote = (e) => {
    setNote(e.target.value);
  };

  const updateNote = () => {
    const newTitle = document.querySelector(`.title${id}`).value;
    const newNote = document.querySelector(`.note${id}`).value;
    const putNote = {
      title: newTitle,
      note: newNote,
      id: id,
    };
    axios.put('http://localhost:6060/api/notes/update', putNote).then(() => {
      getNotes();
    });
  };

  const deleteNote = () => {
    axios.delete(`http://localhost:6060/api/notes/delete/${id}`).then(() => {
      getNotes();
    });
  };

  return (
    <SNote darkmode={darkmode}>
      <input
        type='text'
        className={`title${id}`}
        value={title}
        onChange={handleTitle}
        maxLength='50'
      />
      <textarea className={`note${id}`} value={note} onChange={handleNote} />
      <button type='button' onClick={updateNote}>
        save
      </button>
      <button type='button' onClick={deleteNote}>
        delete
      </button>
    </SNote>
  );
}
