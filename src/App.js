import NoteEditor from './components/NoteEditor'
import NoteList from './components/NoteList'
import './App.css';

const notes = [{
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "06/19/2020"
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "06/18/202"
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">Notes App</header>
      <NoteEditor />
      <NoteList notes={notes}/>
    </div>
  );
}

export default App;
