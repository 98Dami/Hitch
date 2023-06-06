import { Router } from 'react-router-dom';
import './App.css';
import Header from './Header';
import { Switch } from '@mui/material';
import TarjetasHitch from './TarjetasHitch';

function App() {
  return (
    <div className="App">  
        <Header/>
        <TarjetasHitch/> 
    </div>
  );
}

export default App;
