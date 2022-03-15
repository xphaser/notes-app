import React from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

class NoteElement extends React.Component {
  render() {
    return (
      <div className="noteElement">
        <div className="noteWrapper">
          <ReactMarkdown className="noteContent">{this.props.content}</ReactMarkdown>
          <div className="dateWrapper">
            <Link 
              className="dateLink"
              to={`/note/${this.props.date}`}
              state={{
                content: this.props.content,
                date: this.props.date
              }}>            
                {(new Date(this.props.date)).toLocaleDateString()}
              </Link>
            </div>
          </div>
        <div className="btnWrapper">
          <button className="btnDel" onClick={this.props.onDelete}>Delete note</button>
        </div>
      </div>
    )
  }
}

export default NoteElement
