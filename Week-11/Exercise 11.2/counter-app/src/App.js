import './App.css';
import DisplayStepCount from './components/DisplayStepCount';
import AddStep from './components/AddStep';
import ResetStep from './components/ResetStep';

function App() {
  return (
    <div className="app">
      <div className="main-content">
        <DisplayStepCount stepCount={1} />
        <AddStep />
        <ResetStep />
      </div>
    </div>
  );
}

export default App;
