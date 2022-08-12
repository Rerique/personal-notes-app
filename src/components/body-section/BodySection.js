import React from 'react';
import NotesInput from '../input-section/NotesInput';
import ActiveNote from '../notes-section/ActiveNote';
import ArchiveNote from '../notes-section/ArchiveNote';

function BodySection({ notes, addNote, onDelete, onArchive }) {
  const activeNotes = notes.filter(note => {
    return note.archived === false;
  });

  const archivedNotes = notes.filter(note => {
    return note.archived === true;
  });
  return (
    <div className="note-app__body">
      <NotesInput addNote={addNote} />
      <ActiveNote notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />
      <ArchiveNote notes={archivedNotes} onDelete={onDelete} />
    </div>
  );
}

export default BodySection;
