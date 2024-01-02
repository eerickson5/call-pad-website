
import './App.css';
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import icon from './assets/icon.png'
import phone from './assets/phone.png';
import {Container} from 'semantic-ui-react'
import ContactForm from './ContactForm';
import AppInfoRow from './AppInfoRow';

function App() {
  return (
    <div className="App" style={{backgroundImage: "linear-gradient(#4880EC, navy)"}}>
      <header className="App-header" style={{backgroundImage: "linear-gradient(white, #F0F0F0)"}}>
      {/* <div style={{ backgroundImage: `url(${phone})`, backgroundSize: 'cover',}}> */}
        <img className="ui small circular image" src={icon} alt="Call Pad Logo"/>
        <h1 className="ui blue header">Call Pad Systems</h1>
        <h3 className ="ui blue header">custom patient arrival and clinic solutions</h3>
      {/* </div> */}
        
      </header>
        
      <Container>
        <h2 className="ui grey inverted header" style={{marginTop: "50px"}}>The App</h2>
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
