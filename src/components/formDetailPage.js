import React , {Component} from 'react';
import '../index.css';
import Form from './form';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
//import useMediaQuery from './useMediaQuery';



function FormDetailPage(props) {

  console.log(props);

  // const matches = useMediaQuery('(min-width:600px)');
  // const styles = {
  //     container: matches => ({
      
        
  //         width: matches ? '600px' : '100%',
  //         margin: matches? 'auto': '',
      
      
  //     })
  // };
  // console.log(props.location.state.userData);
   //let doctorData = props.location.state.userData;
   
    

   // console.log(matches);
    
        return (
          <div >

              
                <Form  />



          </div>

           
         
        );
      }
      
export default FormDetailPage;