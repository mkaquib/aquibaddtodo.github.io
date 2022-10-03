
import './App.css';
import AddDiv from './components/AddDiv';
import AddTodo from './components/AddTodo';
import AddTodoLocal from './components/AddTodoLocal';
import IncrementDecrementCounter from './components/IncrementDecrementCounter';
import StartStopCounter from './components/StartStopCounter';

function App() {
  return (
    <div className="App">
          {/* <StartStopCounter/> */}
          {/* <IncrementDecrementCounter/> */}
          {/* <AddTodo/> */}
          {/* <AddDiv/> */}
          <AddTodoLocal/>
          
    </div>
  );
}

export default App;
