import React from 'react';
import './index.css';
import MainPage from './pages/MainPage';
import NotePage from './pages/NotePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const notes = [{
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: 1592568000000
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate condimentum nisl, vel porttitor tortor pulvinar consequat. __Donec molestie augue__ ac enim scelerisque, in egestas eros convallis. Nullam mauris orci, ultrices porttitor nibh at, euismod porta lectus. Quisque et tellus vehicula ante molestie faucibus. Aenean at tortor felis. Nulla hendrerit augue quis nisl sodales efficitur. ln at sem vitae tellus vestibulum egestas sit amet eget enim. Etiam ultrices lorem sed sem auctor euismod. Suspendisse vitae ex libero. Aenean varius lacus ex, vitae pellentesque dolor tincidunt sit amet. Sed volutpat nunc tellus, eget sollicitudin ipsum placerat interdum. Fusce quis lacus dictum, fringilla diam ut, luctus libero. \n\nVestibulum id volutpat tortor. Praesent rutrum condimentum libero ut vulputate. Nunc vehicula, mauris non consequat mattis, neque enim vehicula libero, non tristique ligula nibh a velit. Mauris venenatis tempor ipsum, finibus sollicitudin nisl convallis ut. Sed id justo non ante mollis vestibulum. Etiam vitae rutrum metus, vitae dapibus enim. Curabitur feugiat, tellus nec gravida blandit, enim eros iaculis lectus, eu luctus justo quam in est. Phasellus vitae enim egestas, maximus leo ac, finibus augue. Mauris blandit, eros eget faucibus faucibus, sapien lorem porttitor erat, ac sollicitudin mi orci nec urna.",
    date: 1592503200000
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate condimentum nisl, vel porttitor tortor pulvinar consequat.",
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
    const newNotes = this.state.notes.filter((note) => note.date != id);
    this.setState({notes: newNotes})
  }
}

export default App;
