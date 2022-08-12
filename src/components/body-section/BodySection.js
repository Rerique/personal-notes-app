import React from 'react';
import NotesInput from '../input-section/NotesInput';
import ActiveNote from '../notes-section/ActiveNote';
import ArchiveNote from '../notes-section/ArchiveNote';

function BodySection(params) {
  return (
    <div className="note-app__body">
      <NotesInput />
      <ActiveNote />
      <ArchiveNote />
    </div>
  );
}

export default BodySection;
