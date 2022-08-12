import React from 'react';
import NotesInput from '../input-section/NotesInput';
import ActiveNote from '../notes-section/ActiveNote';
import ArchiveNote from '../notes-section/ArchiveNote';

function BodySection({ notes, addNote }) {
  return (
    <div className="note-app__body">
      <NotesInput addNote={addNote} />
      <ActiveNote notes={notes} />
      <ArchiveNote />
    </div>
  );
}

export default BodySection;
