import React,{useReducer} from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import ComponentA_22 from './components/ComponentA_22';
import ComponentB_22 from './components/ComponentB_22';
import ComponentC16 from './components/ComponentC16';
import ComponentC_22 from './components/ComponentC_22';
import Counter1_19 from './components/Counter1_19';
import Counter2_20 from './components/Counter2_20';
import Counter3_21 from './components/Counter3_21';
import DataFetching11 from './components/DataFetching11';
import DataFetching1_23 from './components/DataFetching1_23';
import DataFetching2_23 from './components/DataFetching2_23';
import HookCounteOne from './components/HookCounteOne';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCOunter4 from './components/HookCOunter4';
import HookMouse from './components/HookMouse';
import IntervalHookcounter10 from './components/IntervalHookcounter10';
import MouseContainer from './components/MouseContainer';
import Stopwatch from './components/Stopwatch';

export const CountContect = React.createContext();

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <CountContect.Provider value={{countState: count, countDispatch: dispatch}}>
    <div className="App">
      {/* <ClassCounter/>
      <HookCounter/>
      <HookCounter2/>
      <HookCounter3/>
      <HookCOunter4/>
      <HookCounteOne/>
      <HookMouse/>
      <MouseContainer/>
      <IntervalHookcounter10/>
      <DataFetching11/> */}
      {/* <UserContext.Provider value={'Sauvik'}>
        <ChannelContext.Provider value={'Code Evolution'}>
            <ComponentC16/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <Counter1_19/>
      <Counter2_20/>
      <Counter3_21/> */}
      {/* Count - {count}
      <ComponentA_22/>
      <ComponentB_22/>
      <ComponentC_22/> */}
      {/* <DataFetching1_23/>
      <DataFetching2_23/> */}
    </div>
    // </CountContect.Provider> 
  );
}

export default App;
