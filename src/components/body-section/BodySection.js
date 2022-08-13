import React from 'react';
import NotesInput from '../input-section/NotesInput';
import NotesList from '../notes-section/NotesList';

function BodySection({ notes, addNote, onDelete, onArchive }) {
  return (
    <div className="note-app__body">
      <NotesInput addNote={addNote} />
      <NotesList notes={notes} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}

export default BodySection;
