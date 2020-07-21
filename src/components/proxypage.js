import React , {Component} from 'react';
import { withRouter } from 'react-router';
import '../index.css';
import { Button } from '@material-ui/core';
import uuid from 'react-uuid';
import CircularProgress from '@material-ui/core/CircularProgress';

class ProxyPage extends React.Component {
    constructor(props) {

      super(props);
      console.log(props.location.state.amount);
      //this.state = { phone: props.location.state.phone};
      this.state = { status : 'Fetching access token'};
      localStorage.setItem('amount', props.location.state.amount);
      localStorage.setItem('expiryDate', props.location.state.expiryDate);

     // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

      var data = JSON.stringify({
        "grant_type": "client_credentials",
        "client_id": "RgmLcqWcWH_hZRYynUmRNFuewUXWd6CkKX49b-BcXr8=",
        "client_secret": "SeHH5Jfg7q1IE3uhmgkX9yHnRJxp9kO4aM5ew-XFg8k=",
        "scope": "payments"
      });
     
     // console.log(https://api.natwest.useinfinite.io/.well-known/openid-configuration);
    fetch("http://localhost:8080/open-banking/v3/token", {
    method: 'POST',
    body:data,
    headers: new Headers({
        // Your header content
        'Content-Type':'application/json'
    })
       
    }).then(response =>{ 
     // console.log(response);   
        return response.json()})
      .then(json => {
         

        console.log(json)

        this.state.status='Creating payment consent';
        var data_ = JSON.stringify({
          "Data": {
            "Initiation": {
              "InstructionIdentification": "instr-identification",
              "EndToEndIdentification": "e2e-identification",
              "InstructedAmount": {
                "Amount": localStorage.getItem('amount'),
                "Currency": "GBP"
              },
              "DebtorAccount": null,
              "CreditorAccount": {
                "SchemeName": "IBAN",
                "Identification": "BE56456394728288",
                "Name": "ACME DIY",
                "SecondaryIdentification": "secondary-identif"
              },
              "RemittanceInformation": {
                "Unstructured": "Tools",
                "Reference": "Tools"
              }
            }
          },
          "Risk": {
            "PaymentContextCode": "EcommerceGoods",
            "MerchantCategoryCode": null,
            "MerchantCustomerIdentification": null,
            "DeliveryAddress": null
          }
        });


        fetch("http://localhost:8080/open-banking/v3.1/pisp/domestic-payment-consents", {
          method: 'POST',
          body:data_,
          headers: new Headers({
              // Your header content
              'Content-Type':'application/json',
               'Authorization': 'Bearer ' +json.access_token,
               'x-fapi-financial-id':'0015800000jfwB4AAI',
               'x-jws-signature':'DUMMY_SIG',
               'x-idempotency-key':uuid()

          })
            
          }).then(response =>{ 
          // console.log(response);   
              return response.json()})
            .then(json => {
              

              console.log(json)

              this.state.status='Getting Auth URL';
              localStorage.setItem('consentId',json.Data.ConsentId );


             // console.log("http://localhost:8080/open-banking/v3.1/pisp/authorization.oauth2?request=" + json.Data.ConsentId);

              fetch("http://localhost:8080/open-banking/v3.1/pisp/authorization.oauth2?request=" + json.Data.ConsentId, {
                method: 'GET',
                headers: new Headers({
                    // Your header content
                    'Content-Type':'application/json',
                  
                })
                  
                }).then(response =>{ 
                 // console.log(response);   
                    return response.text()})
                  .then(json => {
                    
      
                    console.log(json);
                    //open link in same window
                    window.open(json,"_self");

      
                  //  this.state.status='Getting Auth U  
                  
                }).catch(error => {
      
                  console.log(error)
                });


             
            
          }).catch(error => {

            console.log(error)
          });

        //check if 
        // if(json.code == 200){

        // //  navigate to 
        //   console.log(this.props);
        //   this.props.history.push( {
        //     pathname: '/users/edit',
      
        //     state: { phone: json.phone }
        //   })
         


       // }
       
    }).catch(error => {

      console.log(error)
    });
   }
  
    // handleSubmit(event) {

    //   //console.log(event); 
    //   event.preventDefault();
    //   const data = new FormData(event.target);
    //   console.log(data.get('amount'));
    //   console.log(data.get('expiryDate'));
    // //   data.append("phone",this.state.phone);
    // //  // data.phone = this.state.phone;
    // //   //console.log(data);  
      
    // //   fetch('http://localhost:3009/api/users/verify', {
    // //     method: 'POST',
    // //     body: data,
    // //   }).then(response =>{    
    // //     return response.json()})
    // //   .then(json => {
         
    // //     //check if 
    // //     if(json.code == 200){

    // //     //  navigate to 
    // //       console.log(this.props);
    // //       this.props.history.push( {
    // //         pathname: '/users/edit',
      
    // //         state: { phone: json.phone }
    // //       })
         


    // //     }
       
    // // }).catch(error => console.log(error));;
    // }
  
    render() {
      return (
        <div style={{width: 600, marginTop: 60}}  className="center">

          <h3>{this.state.status}</h3>
          <CircularProgress />
           <CircularProgress color="secondary" /> 
          


        </div>
      );
    }
  }

  export default withRouter(ProxyPage);