import Title from './title/Title';
import Resume from './resume/Resume';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="column">
        <Title />
      </div>
      <div className="column">
        <Resume />
      </div>
    </div>
  );
}

export default App;
