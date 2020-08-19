import React, {Component} from 'react';
import firebase from 'firebase';

var firebaseui = require('firebaseui');



class FireSignIn extends Component {

    componentDidMount(){
        var uiConfig = {

            autoUpgradeAnonymousUsers: true,


            callbacks: {
                signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                  // User successfully signed in.
                  // Return type determines whether we continue the redirect automatically
                  // or whether we leave that to developer to handle.
                  return true;
                },
                
                signInFailure: function(){
                    window.location.assign('www.google.com');
                    console.log("FAILEDDD")
                },

              },


            
            signInSuccessUrl: 'www.facebook.com',
            signInOptions: [
              firebase.auth.EmailAuthProvider.PROVIDER_ID,
              
            ],
            
            tosUrl: '<your-tos-url>',
            privacyPolicyUrl: function() {
              window.location.assign('<your-privacy-policy-url>');
            }
          };
    
          var ui = new firebaseui.auth.AuthUI(firebase.auth());
          ui.start('#firebaseui-auth-container', uiConfig);
    }


    render(){ 
      


      return(
          <React.Fragment>
        <script src="https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.js"></script>
        <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.css" />
        <div id="firebaseui-auth-container"></div>
    </React.Fragment>
      )
    }
}


export default FireSignIn;