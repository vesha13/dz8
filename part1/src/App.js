import logo from './logo.svg';
import './App.css';
import React from 'react'
import {useEffect, useState} from 'react'
import { List } from './components/List';

function App() {

  const [isLoading, setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },0)
  }, [])


  return (
    <div className="App">
      <List/>
    </div>
  );
}

export default App;
