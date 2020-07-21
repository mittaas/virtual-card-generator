import React from 'react';
import logo from '../src/natwest-logo.jpg';
import './App.css';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';

function App(props) {
  return (
    <div className="App">
       <img src={logo} style={{width: 600, marginTop: 60}}  className="center" alt="logo" />
       <br></br>
        
          
        <Button variant="contained" color="primary" onClick={() => props.history.push('/home')} >
           Start Now 
         </Button>
    </div>
  );
}

export default withRouter(App);
