import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Search from './components/Search';
import './components/styles.css'


function App() {
  return (
    <div className="App">
      <Search/>
      <footer className='footer sticky-bottom'>
        <div className='container'>
          <span>Footer. Hi Jay. -Noah. 7/27/2021</span>
        </div>
      </footer>
    </div>
  );
}

export default App;