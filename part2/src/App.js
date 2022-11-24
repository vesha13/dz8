
import './App.css';
import React from 'react';
import useJsonFetch from './hooks/useJsonFetch';


function App() {

   const a= useJsonFetch("http://localhost:7070/data",1000)
   const b = useJsonFetch("http://localhost:7070/error",1000)
   const c = useJsonFetch("http://localhost:7070/loading",5000)

  return (
    <div className="App">
     
      {console.log(a)}
      {console.log(b)}
      {console.log(c)}
    </div>
  );
}

export default App;
