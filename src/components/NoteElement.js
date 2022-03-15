import React from 'react'
import { Link } from 'react-router-dom'

class NoteElement extends React.Component {
  render() {
    return (
      <div className="noteElement">
        <div className="noteWrapper">
          <div className="noteContent">{this.props.content}</div>
          <div className="noteDateLink">
            <Link 
              to={`/note/${this.props.date}`}
              state={{
                content: this.props.content,
                date: this.props.date
              }}>            
                {(new Date(this.props.date)).toLocaleDateString()}
              </Link>
            </div>
          </div>
        <button className="btnDel" onClick={this.props.onDelete}>Delete note</button>
      </div>
    )
  }
}

export default NoteElement
