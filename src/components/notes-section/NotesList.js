import React from 'react';
import Note from './Note';

function NotesList({ notes, onDelete, onArchive }) {
  const activeNotes = notes.filter(note => {
    return note.archived === false;
  });

  const archivedNotes = notes.filter(note => {
    return note.archived === true;
  });
  return (
    <>
      <h2>Catatan Aktif</h2>
      <div className="notes-list">
        {activeNotes.map(note => (
          <Note key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />
        ))}
      </div>
      <h2>Arsip</h2>
      <div className="notes-list">
        {archivedNotes.map(note => (
          <Note key={note.id} id={note.id} onDelete={onDelete} {...note} />
        ))}
      </div>
    </>
  );
}

export default NotesList;
