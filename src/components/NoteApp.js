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

  render() {
    return (
      <>
        <HeaderSection />
        <BodySection notes={this.state.notes} addNote={this.onAddNoteHandler} />
      </>
    );
  }
}

export default NoteApp;
