import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import './App.css';
import Widgets from './Widgets';

function App() {
  return (
    <div className="app">
    
 
  {/* Sidebar */}
    
     <Sidebar/>
  

  {/* Feed */}
    
     <Feed/>

     <Widgets/>

  {/* Widgets right size of the  */}

    </div>
  );
} 

export default App;
