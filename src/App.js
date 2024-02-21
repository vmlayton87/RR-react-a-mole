import {useState} from 'react'
import './App.css';
import MoleContainer from './components/MoleContainer';


function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for (let i=0; i<9; i++) {
      hills.push(<MoleContainer  key={i} setScore={setScore} score={score}/>)
    }
    return (
      <div className="row row-cols-3">{hills}</div>
    )
  }

  return (
    <div className='App'>
      <h1>React-a-Mole Activity</h1>
      <h2>{score}</h2>
      <div className="container text-center ">
        
          {createMoleHill()}
        
      </div>
      
    </div>
  );
}

export default App;
