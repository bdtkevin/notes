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
        placeholder='Title'
      />
      <textarea
        className={`note${id}`}
        placeholder='Write here..'
        value={note}
        onChange={handleNote}
      />
      <div className='button-container'>
        <button
          type='button'
          className='button-bottom save'
          onClick={updateNote}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 460.002 460.002'
            width='26px'
            height='26px'
            fill={darkmode ? '#b9b9b9' : '#212121'}
          >
            <path
              d='M427.137,0C408.93,0,51.379,0,32.865,0C14.743,0,0,14.743,0,32.865v394.272c0,18.122,14.743,32.865,32.865,32.865
			c0,0,374.895,0,394.272,0c18.122,0,32.865-14.743,32.865-32.865V32.865C460.001,14.743,445.258,0,427.137,0z M245.812,30h50.995
			v54.466h-50.995V30z M107.198,30h108.615v69.466c0,8.284,6.716,15,15,15h80.995c8.284,0,15-6.716,15-15V30h26.377v119.636H107.198
			V30z M107.007,430.001V308.673h245.986v121.328H107.007z M430.002,427.137L430.002,427.137c-0.001,1.58-1.286,2.865-2.866,2.865
			h-44.143V293.673c0-8.284-6.716-15-15-15H92.007c-8.284,0-15,6.716-15,15v136.328H32.865c-1.58,0-2.865-1.285-2.865-2.865V32.865
			C30,31.285,31.285,30,32.865,30h44.333v134.636c0,8.284,6.716,15,15,15h275.986c8.284,0,15-6.716,15-15V30h43.953
			c1.58,0,2.865,1.285,2.865,2.865V427.137z'
            />
          </svg>
        </button>
        <button
          type='button'
          className='button-bottom trash'
          onClick={deleteNote}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 458.5 458.5'
            width='26px'
            height='26px'
            fill={darkmode ? '#b9b9b9' : '#212121'}
          >
            <path
              d='M382.078,57.069h-89.78C289.128,25.075,262.064,0,229.249,0S169.37,25.075,166.2,57.069H76.421
				c-26.938,0-48.854,21.916-48.854,48.854c0,26.125,20.613,47.524,46.429,48.793V399.5c0,32.533,26.467,59,59,59h192.508
				c32.533,0,59-26.467,59-59V154.717c25.816-1.269,46.429-22.668,46.429-48.793C430.933,78.985,409.017,57.069,382.078,57.069z
				 M229.249,30c16.244,0,29.807,11.673,32.76,27.069h-65.52C199.442,41.673,213.005,30,229.249,30z M354.503,399.501
				c0,15.991-13.009,29-29,29H132.995c-15.991,0-29-13.009-29-29V154.778c12.244,0,240.932,0,250.508,0V399.501z M382.078,124.778
				c-3.127,0-302.998,0-305.657,0c-10.396,0-18.854-8.458-18.854-18.854S66.025,87.07,76.421,87.07h305.657
				c10.396,0,18.854,8.458,18.854,18.854S392.475,124.778,382.078,124.778z'
            />
            <path
              d='M229.249,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.715-15-15-15c-8.284,0-15,6.716-15,15v173.705
				C214.249,385.607,220.965,392.323,229.249,392.323z'
            />
            <path
              d='M306.671,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15s-15,6.716-15,15v173.705
				C291.671,385.607,298.387,392.323,306.671,392.323z'
            />
            <path
              d='M151.828,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15c-8.284,0-15,6.716-15,15v173.705
				C136.828,385.607,143.544,392.323,151.828,392.323z'
            />
          </svg>
        </button>
      </div>
    </SNote>
  );
}
