import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
//import history from '../history';
function Home(props) {

  //console.log(props)
   
    const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';
    return (
     <div style={{width: 600, marginTop: 60}}  className="center">


         <h3>Get your virtual Card. </h3>

         <Button variant="contained" color="primary" onClick={() => props.history.push('/new')} >
           Get Started
         </Button>


     </div>
    );
}
  
export default withRouter(Home);