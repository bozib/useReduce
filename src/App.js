import logo from './logo.svg';
import './App.css';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import DataFetchOne from './components/DataFetchOne'
import DataFetchTwo from './components/DataFetchTwo';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
     <Counter/>
     {/*
     <DataFetchTwo/>
     <DataFetchOne/> 
     <CounterThree/>
     <CounterTwo/> 
     <CounterOne/> */}
    </div>
    
  );
}

export default App;
