import { useEffect, useState } from 'react';
import axios from 'axios';
import Note from './Note';
import SDashboard from './styled/SDashboard';

export default function Dashboard({ darkmode }) {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getNotes = () => {
    axios
      .get('http://localhost:6060/api/notes/1')
      .then(({ data }) => {
        setNotes(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    getNotes();
  }, []);

  const addNote = () => {
    const newNote = {
      userId: 1,
      title: '',
      note: '',
    };
    axios.post('http://localhost:6060/api/notes/new', newNote).then(() => {
      getNotes();
    });
  };

  return (
    <>
      {error && <p>error</p>}
      {!isLoading && !error && (
        <SDashboard darkmode={darkmode}>
          <button className='new-note' onClick={addNote}>
            <svg
              width='28px'
              height='28px'
              viewBox='0 0 28 28'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M24,13 L15,13 L15,4 C15,3.447 14.553,3 14,3 C13.447,3 13,3.447 13,4 L13,13 L4,13 C3.447,13 3,13.447 3,14 C3,14.553 3.447,15 4,15 L13,15 L13,24 C13,24.553 13.447,25 14,25 C14.553,25 15,24.553 15,24 L15,15 L24,15 C24.553,15 25,14.553 25,14 C25,13.447 24.553,13 24,13' />
            </svg>
          </button>
          <ul className='notes'>
            {notes.map((note) => (
              <Note
                key={note.id}
                id={note.id}
                pTitle={note.title}
                pNote={note.note}
                getNotes={getNotes}
                darkmode={darkmode}
              />
            ))}
          </ul>
        </SDashboard>
      )}
    </>
  );
}
