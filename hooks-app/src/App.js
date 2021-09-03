
import './App.css';
import ClassCounter from './components/ClassCounter';
import DataFetching from './components/DataFetching';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import MouseContainer from './components/MouseContainer';
import UseEffectCounter1 from './components/UseEffectCounter1';
import UseEffectMouse from './components/UseEffectMouse';
import React from 'react'

export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Noah'}>
        <DataFetching/>
      </UserContext.Provider>
      {/* <ClassCounter></ClassCounter>
      <HookCounter></HookCounter> */}
      {/* <HookCounterTwo></HookCounterTwo> */}
      {/* <HookCounterThree></HookCounterThree> */}
      {/* <HookCounterFour></HookCounterFour> */}
      {/* <UseEffectCounter1></UseEffectCounter1>
      <hr/>
      <UseEffectMouse></UseEffectMouse> */}
      {/* <MouseContainer/> */}
      
    </div>
  );
}

export default App;
