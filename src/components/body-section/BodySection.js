import React from 'react';
import NotesInput from '../input-section/NotesInput';
import ActiveNote from '../notes-section/ActiveNote';
import ArchiveNote from '../notes-section/ArchiveNote';

function BodySection({ notes, addNote, onDelete, onArchive }) {
  return (
    <div className="note-app__body">
      <NotesInput addNote={addNote} />
      <ActiveNote notes={notes} onDelete={onDelete} onArchive={onArchive} />
      <ArchiveNote onDelete={onDelete} />
    </div>
  );
}

export default BodySection;
