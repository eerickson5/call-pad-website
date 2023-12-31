
import './App.css';
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import icon from './assets/icon.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img class="ui medium circular image" src={icon} alt="Call Pad Logo"/>
        <h1 className="ui header">Call Pad Systems</h1>
        <h3 className ="ui header">custom patient arrival and clinic solutions</h3>
      </header>
    </div>
  );
}

export default App;
