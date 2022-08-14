import React from 'react';

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onNoteChangeEventHandler = this.onNoteChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return { title: event.target.value.slice(0, 50) };
    });
  }

  onNoteChangeEventHandler(event) {
    this.setState(() => {
      return { body: event.target.value };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="note-input" id="add-note">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">Sisa Karakter: {50 - this.state.title.length}</p>
          <input type="text" className="note-input__title" placeholder="Judul Catatan ..." onChange={this.onTitleChangeEventHandler} value={this.state.title} />
          <textarea type="text" className="note-input__body" placeholder="Isi catatan ..." onChange={this.onNoteChangeEventHandler} value={this.state.body}></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NotesInput;
