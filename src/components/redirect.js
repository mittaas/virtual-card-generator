import React , {Component} from 'react';
import queryString from 'query-string';
import uuid from 'react-uuid';
import { withRouter } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress';

//const queryString = require('query-string');



class Redirect extends React.Component {

    constructor(props) {

        super(props);
        
        var params = queryString.parse(props.location.hash);

        console.log(queryString.parse(props.location.hash));
        //console.log(props.location.state.phone);
        //this.state = { phone: props.location.state.phone};
        this.state = { status : 'Fetching access token', code : params.code}
       // this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){



        fetch("http://localhost:8080/open-banking/v3/token", {
            method: 'POST',
            body:JSON.stringify({code : this.state.code}),
            headers: new Headers({
                // Your header content
                'Content-Type':'application/json',
              
            })
              
            }).then(response =>{ 
             // console.log(response);   
                return response.json()})
              .then(json => {
                
  
                console.log("got accees token")
                console.log(json);
                console.log(localStorage.getItem('consentId'));
                //get access_token

                var data_ = JSON.stringify({
                    "Data": {
                        "ConsentId": localStorage.getItem('consentId'),
                      "Initiation": {
                        "InstructionIdentification": "instr-identification",
                        "EndToEndIdentification": "e2e-identification",
                        "InstructedAmount": {
                          "Amount": localStorage.getItem('amount'),
                          "Currency": 'GBP'
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
                })

                this.state.access_token = json.access_token;


                fetch("http://localhost:8080/open-banking/v3.1/pisp/domestic-payments", {
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
                        
          
                        console.log('payment order created');
                        console.log(json);
                        //get access_token

                        fetch("http://localhost:8080/open-banking/v3.1/pisp/domestic-payments/"+ json.Data.DomesticPaymentId, {
                                    method: 'GET',
                                  
                                    headers: new Headers({
                                        // Your header content
                                        'Content-Type':'application/json',
                                        'Authorization': 'Bearer ' +this.state.access_token,
                                        'x-fapi-financial-id':'0015800000jfwB4AAI',
                                       
                        
                                    })
                                
                                    
                                    }).then(response =>{ 
                                    // console.log(response);   
                                        return response.json()})
                                    .then(json => {
                                        
                        
                                        //console.log('payment order created');
                                        console.log(json);

                                        if(json.Data.Status == 'AcceptedSettlementCompleted'){


                                            console.log('success');
                                            this.props.history.push( {
                                                pathname: '/success/', state :{ status : 'success'} })
                                            //show success page
                                        }
                                        //get access_token
                        
                        
                                        
                        
                                        
                                    
                                    }).catch(error => {
                        
                                    console.log(error)
                                    });
        
        
                        
        
                        
                      
                    }).catch(error => {
          
                      console.log(error)
                    });


                
              
            }).catch(error => {
  
              console.log(error)
            });
      }


   
  
    render() {


        return (
            <div style={{width: 600, marginTop: 60}}  className="center">
       
       
                <h3>redirecting </h3>
                <CircularProgress />
                <CircularProgress color="secondary" /> 
       
                
       
       
            </div>
           );

    }
}
  
export default withRouter(Redirect);