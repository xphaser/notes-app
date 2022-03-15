import React from 'react';
import './index.css';
import MainPage from './MainPage';
import NotePage from './NotePage'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const notes = [{
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: 1592568000000
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: 1592503200000
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: 1592481600000
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: notes
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDel = this.handleDel.bind(this);
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage notes={this.state.notes} onAdd={this.handleAdd} onDelete={this.handleDel}/>} />
          <Route path="/note/:id" element={<NotePage notes={this.state.notes} onDelete={this.handleDel}/>} />
        </Routes>
      </Router>
    )
  }

  handleAdd(newNote) {
    const newNotes = this.state.notes;
    newNotes.unshift(newNote);
    this.setState({notes: newNotes});
  }

  handleDel(note) {
    const id = note.date;
    const newNotes = this.state.notes.filter((note) => {
      return note.date != id;
    });
    this.setState({notes: newNotes})
  }
}

export default App;
