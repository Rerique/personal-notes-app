import React from 'react';
import BodySection from './body-section/BodySection';
import HeaderSection from './header-section/HeaderSection';
import { getInitialData } from '../utils/data';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState(prevState => {
      let createTime = new Date();
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: createTime.toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map(note => (note.id === id ? { ...note, archived: !note.archived } : note));
    this.setState({ notes });
  }

  render() {
    return (
      <>
        <HeaderSection />
        <BodySection notes={this.state.notes} addNote={this.onAddNoteHandler} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
      </>
    );
  }
}

export default NoteApp;
