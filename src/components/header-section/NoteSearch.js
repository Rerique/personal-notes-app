import React from 'react';

class NoteSearch extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="note-search">
        <input type="text" placeholder="cari catatan" />
      </div>
    );
  }
}

export default NoteSearch;