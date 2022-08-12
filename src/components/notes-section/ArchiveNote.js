import React from 'react';
import Note from './Note';

function ArchiveNote({ notes, onDelete }) {
  return (
    <>
      <h2>Arsip</h2>
      <div className="notes-list">
        {notes.map(note => (
          <Note key={note.id} id={note.id} onDelete={onDelete} {...note} />
        ))}
      </div>
    </>
  );
}

export default ArchiveNote;
