import logo from './logo.svg';
import './App.css';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import DataFetchOne from './components/DataFetchOne'
import DataFetchTwo from './components/DataFetchTwo';

function App() {
  return (
    <div className="App">
     <DataFetchTwo/>
     {/*
     <DataFetchOne/> 
     <CounterThree/>
     <CounterTwo/> 
     <CounterOne/> */}
    </div>
    
  );
}

export default App;
