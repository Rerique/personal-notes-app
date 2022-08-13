import React from 'react';
import NotesInput from './NotesInput';
import NotesList from './notes-section/NotesList';

function BodySection({ notes, addNote, onDelete, onArchive, keyword }) {
  return (
    <div className="note-app__body">
      <NotesInput addNote={addNote} />
      <NotesList notes={notes} onDelete={onDelete} onArchive={onArchive} keyword={keyword} />
    </div>
  );
}

export default BodySection;
