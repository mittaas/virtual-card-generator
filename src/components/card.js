import React , {Component} from 'react';
import '../index.css';

import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

//import useMediaQuery from './useMediaQuery';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      background :'#303f9f',
      height: '180px',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    h3 :{

        color:'white'
    }
  });

function DebitCard(props) {

  console.log(props);

  const classes = useStyles();

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
            <Card className={classes.root} style={{width: 560}}>
            <CardContent>
             
              <Typography variant="h3" component="p" style={{ color: 'white'}}>
               {props.data.data1}  {props.data.data2}   {props.data.data3}   {props.data.data4}
            
              </Typography>
             

             <Typography style={{ color: 'white'}} >Expiry {props.data.expiryDate}</Typography>
             <Typography style={{ color: 'white'}} >  Balance {props.data.amount} GBP</Typography>
            </CardContent>

      


            
          </Card>
           
         
        );
      }
      
export default withRouter(DebitCard);