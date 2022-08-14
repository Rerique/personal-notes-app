import React from 'react';
import NotesInput from './NotesInput';
import NotesList from './notes-section/NotesList';

function BodySection({ notes, addNote, onDelete, onArchive, keyword, onSearch, navbar }) {
  return <div className="note-app__body">{navbar === 'addNote' ? <NotesInput addNote={addNote} /> : <NotesList notes={notes} onDelete={onDelete} onArchive={onArchive} keyword={keyword} onSearch={onSearch} />}</div>;
}

export default BodySection;
