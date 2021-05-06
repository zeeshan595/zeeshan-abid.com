import Title from './title/Title';
import Resume from './resume/Resume';
import Skills from './skills/Skills';
import Experience from './experience/Experience';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="title">
        <div className="column">
          <Title />
        </div>
        <div className="column">
          <Resume />
        </div>
      </div>
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
