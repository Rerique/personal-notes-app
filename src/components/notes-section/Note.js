import React from 'react';

function Note(params) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">Judul</h3>
        <p className="note-item__date">Tanggal</p>
        <p className="note-item__body">Isi Catatan</p>
      </div>
      <div className="note-item__action">
        <button class="note-item__delete-button">Delete</button>
        <button class="note-item__archive-button">Arsipkan</button>
      </div>
    </div>
  );
}

export default Note;
