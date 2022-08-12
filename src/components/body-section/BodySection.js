import React from 'react';
import NotesInput from '../input-section/NotesInput';
import Note from '../notes-section/Note';

function BodySection(params) {
  return (
    <div className="note-app__body">
      <NotesInput />
      <h2>Catatan Aktif</h2>
      <div className="note-list">
        <Note />
        <Note />
      </div>
      <h2>Arsip</h2>
      <div className="note-list">
        <Note />
        <Note />
      </div>
    </div>
  );
}

export default BodySection;
