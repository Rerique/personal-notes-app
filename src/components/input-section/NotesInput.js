import React from 'react';

class NotesInput extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form>
          <p className="note-input__title__char-limit">Sisa Karakter: 50</p>
          <input type="text" className="note-input__title" placeholder="JUDUL" />
          <textarea type="text" className="note-input__body" placeholder="Catatan.."></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NotesInput;
