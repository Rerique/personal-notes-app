import React from 'react';
import Note from './Note';

function NotesList({ notes, onDelete, onArchive, keyword, onSearch }) {
  const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(keyword.toLowerCase()));

  const activeNotes = filteredNotes.filter(note => {
    return note.archived === false;
  });

  const archivedNotes = filteredNotes.filter(note => {
    return note.archived === true;
  });
  return (
    <>
      <input className="note-app__search" type="text" placeholder="Cari catatan.." onChange={event => onSearch(event.target.value)} />

      <div className="note-tabs">
        <div className="note-tabs__item">
          <input type="radio" name="note-list-tabs" id="tab-1" defaultChecked className="note-tabs__switch" />
          <label htmlFor="tab-1" className="note-tabs__label">
            <h2>Catatan Aktif</h2>
          </label>
          {activeNotes.length > 0 ? (
            <div className="notes-list">
              {activeNotes.map(note => (
                <Note key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />
              ))}
            </div>
          ) : (
            <p className="notes-list notes-list__empty-message">Tidak ada catatan</p>
          )}
        </div>
        <div className="note-tabs__item">
          <input type="radio" name="note-list-tabs" id="tab-2" className="note-tabs__switch" />
          <label htmlFor="tab-2" className="note-tabs__label">
            <h2>Arsip</h2>
          </label>
          {archivedNotes.length > 0 ? (
            <div className="notes-list">
              {archivedNotes.map(note => (
                <Note key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />
              ))}
            </div>
          ) : (
            <p className="notes-list notes-list__empty-message">Tidak ada catatan</p>
          )}
        </div>
      </div>
    </>
  );
}

export default NotesList;
