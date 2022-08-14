import React from 'react';

function HeaderSection({ onSelect }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-app__navigation">
        <div className="note-app__navigation-link">
          <input type="radio" name="navbar" id="nav-1" defaultChecked className="note-app__navigation-switch" onClick={() => onSelect('addNote')} />
          <label htmlFor="nav-1" className="note-app__navigation-label">
            Buat Catatan
          </label>
        </div>
        <div className="note-app__navigation-link">
          <input type="radio" name="navbar" id="nav-2" className="note-app__navigation-switch" onClick={() => onSelect('noteList')} />
          <label htmlFor="nav-2" className="note-app__navigation-label">
            List Catatan
          </label>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
