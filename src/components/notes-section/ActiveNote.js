import React from 'react';
import Note from './Note';

function ActiveNote({ notes, onDelete }) {
  return (
    <>
      <h2>Catatan Aktif</h2>
      <div className="notes-list">
        {notes.map(note => (
          <Note key={note.id} id={note.id} onDelete={onDelete} {...note} />
        ))}
      </div>
    </>
  );
}

export default ActiveNote;
