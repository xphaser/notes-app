import React from 'react';

class NoteEditor extends React.Component {
  render() {
    return (
      <div className="editor">
        <div className="editorHeader">Note</div>
        <textarea
        className="editorTextarea"
        placeholder="Note text"
        rows = {7}
        />
        <button className="btnAdd" onClick={this.handleAdd}>Add note</button>
      </div>
    )
  }
}

export default NoteEditor