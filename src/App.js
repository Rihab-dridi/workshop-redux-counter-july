
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';
import { decrementHandler, incrementHandler, resetHandler } from './redux/actions';

function App() {
const dispatch = useDispatch()
const counter = useSelector(state => state.counter)

// const incrementCounter=()=>{
//   dispatch(incrementHandler()
//   )
// }

  return (
    <div className="App">
      <h1> Workshop redux </h1>
      <h4>Counter</h4>
      <div className='counter'>


        <button onClick={()=>{ dispatch(incrementHandler()) }} >+</button>


        <h4>{counter}</h4>

        <button  onClick={()=>{dispatch(decrementHandler())}}  >-</button>
      </div>
      <button onClick={()=>{dispatch(resetHandler())}} > reset  </button>
    </div>
  );
}

export default App;
