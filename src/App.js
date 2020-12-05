import logo from './logo.svg';
import './App.css';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import DataFetchOne from './components/DataFetchOne'
import DataFetchTwo from './components/DataFetchTwo';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
import HookTimer from './components/HookTimer';
import CustomCounter from './hooks/CustomCounter';
import CustomCounterTwo from './hooks/CustomCounterTwo';
import UserForm from './hooks/UserForm';

function App() {
  return (
    <div className="App">
   <UserForm/>
     {/*
      <CustomCounter/>
    <CustomCounterTwo/>
      <HookTimer/>
     <FocusInput/>
     <Counter/>
     <DataFetchTwo/>
     <DataFetchOne/> 
     <CounterThree/>
     <CounterTwo/> 
     <CounterOne/> */}
    </div>
    
  );
}

export default App;
