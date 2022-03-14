import React from 'react';

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  render() {
    return (
      <div className="editor">
        <div className="editorHeader">Note</div>
        <textarea
          className="editorTextarea"
          placeholder="Note text"
          rows = {7}
          value = {this.state.value}
          onChange = {this.handleChange}
        />
        <button className="btnAdd" onClick={this.handleAdd}>Add note</button>
      </div>
    )
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleAdd() {
    const newNote = {
      content: this.state.value,
      date: Date.now(),
    }
    this.setState({value: ''});
    this.props.onAdd(newNote);
  }
}

export default NoteEditor
