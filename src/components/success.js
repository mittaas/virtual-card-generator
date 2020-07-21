import React , {Component} from 'react';
import { withRouter } from 'react-router';
import Card from './card';
import Button from '@material-ui/core/Button';

class Success extends React.Component {


    constructor(props) {

        super(props);
        console.log(props);
        // var params = queryString.parse(props.location.hash);

        // console.log(queryString.parse(props.location.hash));
        // //console.log(props.location.state.phone);
        // //this.state = { phone: props.location.state.phone};
        // this.state = { status : 'Fetching access token', code : params.code}
       // this.handleSubmit = this.handleSubmit.bind(this);
      }

      render() {

        //generate random 16 digits
        var expiryDate = localStorage.getItem('expiryDate');
        var amount = localStorage.getItem('amount');
        
        var data ={data1 : Math.floor(1000 + Math.random() * 9000), 
            data2 : Math.floor(1000 + Math.random() * 9000), 
            data3: Math.floor(1000 + Math.random() * 9000), 
            data4 : Math.floor(1000 + Math.random() * 9000),
        expiryDate : expiryDate , amount : amount
        };


        return (
            <div style={{width: 600, marginTop: 60}}  className="center">
       
       
                <h3>Congratulations! Your card is cretead </h3>

                <Card data={data}/>
                <Button variant="contained" color="primary" style={{marginTop: 60}} className="center" onClick={() => this.props.history.push('/new')} >
                Create Another Card
                </Button>
       
                
       
       
            </div>
           );

    }



}

export default Success;