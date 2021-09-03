import logo from './logo.svg';
import './App.css';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
import DataFetch from './components/DataFetch';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      {/* <Counter1/> */}
      {/* <Counter2/> */}
      {/* <Counter3/> */}
      <DataFetch></DataFetch>
    </div>
  );
}

export default App;
