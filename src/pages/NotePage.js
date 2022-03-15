import '../App.css';
import React from 'react';
import ReactMarkdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom';

const NotePage = (props) => {
    const { id } = useParams()
    const note = props.notes.find(note => note.date == id);

    return (
      <div className="App">
        <header className="App-header">Notes App</header>
        <div className="wrapper">
          <Link to ='/' replace={true}>
            <button className="btnBack">Go back</button>
          </Link>
          <Link to='/' replace={true}>
            <button className="btnDel" onClick={props.onDelete.bind(null, note)}>Delete note</button>
          </Link>
          <div className="note">
            <ReactMarkdown>{note.content}</ReactMarkdown>
            <div className="noteDate">
              {(new Date(note.date)).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    )
}

export default NotePage
