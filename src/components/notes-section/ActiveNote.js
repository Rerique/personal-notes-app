import React from 'react';
import Note from './Note';

function ActiveNote({ notes, onDelete, onArchive }) {
  return (
    <>
      <h2>Catatan Aktif</h2>
      <div className="notes-list">
        {notes.map(note => (
          <Note key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />
        ))}
      </div>
    </>
  );
}

export default ActiveNote;
