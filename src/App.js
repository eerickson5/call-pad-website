
import './App.css';
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import icon from './assets/icon.png'
import {Container} from 'semantic-ui-react'
import ContactForm from './ContactForm';
import AppInfoRow from './AppInfoRow';

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
        <AppInfoRow
        title="Patient Arrival Notifications"
        body="Send push notifications directly to employees' smart phones and watches whenever a patient arrives with a single tap."
         />
         <AppInfoRow
         title="Custom Messages" 
         body="Send customized messages with each notification to communicate patient information, appointment information, and more."/>
         <AppInfoRow 
         title="Simple, Clean Interfaces"
         body="Each employee's dashboard includes only the important information, nothing more."
         />
      </Container>

      <ContactForm/>
    </div>
  );
}

export default App;
