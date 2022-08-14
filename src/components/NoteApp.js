import React from 'react';
import BodySection from './BodySection';
import HeaderSection from './HeaderSection';
import { getInitialData } from '../utils/data';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      keyword: '',
      navbar: 'addNote',
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onSelectNavbarHandler = this.onSelectNavbarHandler.bind(this);
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

  onSearchHandler(searchInput) {
    this.setState(() => {
      return { keyword: searchInput };
    });
  }

  onSelectNavbarHandler() {
    this.setState(() => {
      return { navbar: arguments[0] };
    });
  }

  render() {
    return (
      <>
        <HeaderSection onSelect={this.onSelectNavbarHandler} />
        <BodySection notes={this.state.notes} addNote={this.onAddNoteHandler} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} keyword={this.state.keyword} onSearch={this.onSearchHandler} navbar={this.state.navbar} />
      </>
    );
  }
}

export default NoteApp;
