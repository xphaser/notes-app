import './App.css';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const NotePage = (props) => {
    const { id } = useParams()
    const note = props.notes.find(note => note.date == id);

    return (
      <div className="NotePage">
        <header className="App-header">Notes App</header>
        <div className="wrapper">
          <Link to ='/' replace={true}>
            <button className="btnBack">Go back</button>
          </Link>
          <Link to='/' replace={true} >
            <button className="btnDel" onClick={props.onDelete.bind(null, note)}>Delete</button>
          </Link>
          <div className="note">
            <span>{note.content}</span>
            <div className="noteDate">
              {(new Date(note.date)).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    )
}

export default NotePage
