import React from 'react';
import Note from './Note';

class ActiveNote extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <>
        <h2>Catatan Aktif</h2>
        <div className="notes-list">
          <Note />
        </div>
      </>
    );
  }
}

export default ActiveNote;
