import React from 'react'

class NoteElement extends React.Component {
  render() {
    return (
      <div className="noteElement">
        <div className="noteWrapper">
          <div className="noteContent">{this.props.content}</div>
          <div className="noteDate">{this.props.date}</div>
        </div>
        <button className="btnDel">Delete note</button>
      </div>
    )
  }
}

export default NoteElement
