import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../logos/Group 1329.png'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import googleLogo from '../../logos/google.png'


const LogIn = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const history=useHistory();
    const location =useLocation(); 
    let { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length===0){
firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleIn=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
    const {displayName,email }    = result.user;
    const signedInUser={userName:displayName,email:email}
           setLoggedInUser(signedInUser);
           history.replace(from)
            // ...
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
           console.log(errorCode,errorMessage)
          });
    }
    return (
      
     
            <React.Fragment>
              <CssBaseline />
                
              <Container>
                
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' ,textAlign: 'center' }} > 
                <img   style={{ height:'100px', width:'200px',margin:'50px'}} src={logo} alt=""/>
                <div style={{backgroundColor:'white',margin:'0 auto',padding:'50px',width:'400px',borderRadius:"10px"}}>
                    <h1>Login With </h1>
                    <div style={{border: '1px solid black',borderRadius: '50px',backgroundColor:'white',padding:'5px'}}><img src={googleLogo} alt="" style={{float:'left',width:'50px' ,height:'50px',padding:'15px'}}/>
                    <h3 onClick={handleGoogleIn}>Continue with Google</h3></div>
                    <h5>Don't have account <span> Create an account</span></h5>
                </div>
                </Typography>
              </Container>
            </React.Fragment>
          );

};

export default LogIn;