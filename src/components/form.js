import React , {Component} from 'react';
import { withRouter } from 'react-router';
import '../index.css';
import { Button } from '@material-ui/core';

class Form extends React.Component {
    constructor(props) {

      super(props);
      //console.log(props.location.state.phone);
      //this.state = { phone: props.location.state.phone};
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {

      //console.log(event); 
      event.preventDefault();
      const data = new FormData(event.target);
      console.log(data.get('amount'));
      console.log(data.get('expiryDate'));

      this.props.history.push({pathname: '/debit',
      
               state: { amount: data.get('amount'), expiryDate: data.get('expiryDate')}});
    //   data.append("phone",this.state.phone);
    //  // data.phone = this.state.phone;
    //   //console.log(data);  
      
    //   fetch('http://localhost:3009/api/users/verify', {
    //     method: 'POST',
    //     body: data,
    //   }).then(response =>{    
    //     return response.json()})
    //   .then(json => {
         
    //     //check if 
    //     if(json.code == 200){

    //     //  navigate to 
    //       console.log(this.props);
    //       this.props.history.push( {
    //         pathname: '/users/edit',
      
    //         state: { phone: json.phone }
    //       })
         


    //     }
       
    // }).catch(error => console.log(error));;
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} style={{width: 600, marginTop: 60}}  className="center">
          
  
           <label><h3>Choose an amount(GBP)</h3> </label>
          
          <input id="amount" name="amount" type="number" required /> 

          <label> <h3>Choose an Expiry Date</h3> </label>
          
          <input id="expiryDate" name="expiryDate" type="date" required />
          <br></br>
          <button style={{ background :'#3f51b5', width:'200px', color:'white', marginTop:'20px'}}>Submit </button>
  
       
  
         
        </form>
      );
    }
  }

  export default withRouter(Form);