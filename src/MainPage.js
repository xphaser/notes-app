import NoteEditor from './components/NoteEditor'
import NoteList from './components/NoteList'
import './App.css';
import React from 'react';

class MainPage extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Notes App</header>
        <div className="wrapper">
          <NoteEditor onAdd={this.props.onAdd}/>
          <NoteList notes={this.props.notes} onDelete={this.props.onDelete}/>
        </div>
      </div>
    )
  }
}

export default MainPage;
