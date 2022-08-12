import React from 'react';
import Note from './Note';

class ArchiveNote extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <>
        <h2>Arsip</h2>
        <div className="notes-list">
          <Note />
        </div>
      </>
    );
  }
}

export default ArchiveNote;
