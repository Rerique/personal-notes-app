import React from 'react';

function HeaderSection({ onSelect }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <ul className="note-app__navigation">
        <li>
          <button className="note-app__navigation-link" onClick={()=> onSelect('addNote')}>
            Buat Catatan
          </button>
        </li>
        <li>
          <button className="note-app__navigation-link" onClick={()=> onSelect('noteList')}>
            List Catatan
          </button>
        </li>
      </ul>
    </div>
  );
}

export default HeaderSection;