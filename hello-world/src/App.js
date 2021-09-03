import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Component } from 'react';
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import Form from './components/Form';
// function App() {
//   return (
//     <div className="App">
//       <Greet></Greet>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <br></br>
        <UserGreeting></UserGreeting>
        <hr></hr>
        <Form></Form>






        {/* <NameList></NameList>
        <hr></hr>
        <Stylesheet primary={true}></Stylesheet>
        <Inline></Inline> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <FunctionClick></FunctionClick> */}
        {/* <ClassClick></ClassClick> */}
        {/* <Message></Message> */}
        {/* <Counter></Counter> */}
        {/* <Greet name='Bruce' heroName='Batman'>
          <p>This is children props</p>
        </Greet>
        <Greet name='Noah' heroName='WonderWoman'>
          <button>Action</button>
        </Greet>
        
        <hr/>
        <Welcome name='Bruce' heroName='Batman'></Welcome>
        <Welcome name='Noah' heroName='WonderWoman'></Welcome>
        <Welcome name='John' heroName='ScoobyDoo'></Welcome> */}
        {/* <Greet name='John' heroName='ScoobyDoo'/> */}
        {/* <EventBind></EventBind> */}
      </div>
    )
  }
}

export default App;
