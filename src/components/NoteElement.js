import React from 'react'

class NoteElement extends React.Component {
  render() {
    return (
      <div className="noteElement">
        <div className="noteWrapper">
          <div className="noteContent">{this.props.content}</div>
          <div className="noteDate">{(new Date(this.props.date)).toLocaleDateString()}</div>
        </div>
        <button className="btnDel" onClick={this.props.onDelete}>Delete note</button>
      </div>
    )
  }
}

export default NoteElement
