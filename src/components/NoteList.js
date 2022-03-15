import React from 'react'
import NoteElement from './NoteElement'

class NoteList extends React.Component {
  render() {
    return ( 
      <>
        <div className="listHeader">Latest notes</div>
        <div className="listContainer">
          {this.props.notes.map((note) =>
            <NoteElement 
              content={note.content}
              date={note.date} 
              key={note.date}
              onDelete={this.props.onDelete.bind(this, note)} 
            />
          )}
        </div>
      </>
    )
  }
}

export default NoteList
