
import './App.css';
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import icon from './assets/icon.png'
import {Container} from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img class="ui small circular image" src={icon} alt="Call Pad Logo"/>
        <h1 className="ui header">Call Pad Systems</h1>
        <h3 className ="ui header">custom patient arrival and clinic solutions</h3>
      </header>
        
      <Container>
        <h2 className="ui header">The App</h2>
        <h3 className="ui header">Patient Arrival Notifications</h3>
        <p> Send push notifications directly to employees' smart phones and watches whenever a patient arrives with a single tap.</p>
        <h3 className="ui header">Custom Messages</h3>
        <p>Send customized messages with each notification to communicate patient information, appointment information, and more.</p>
        <h3 className="ui header">Simple, Clean Interfaces</h3>
        <div style={{flexDirection: 'row', display: 'flex'}}>
          <p>The front desk dashboard displays all employees on a single color-coded screen.</p>
          <p>Each employee's dashboard includes only the important information, nothing more.</p>
        </div>

        
        
      </Container>
    </div>
  );
}

export default App;
