import React from 'react'
import { useSelector } from 'react-redux';
import GoogleLogin from 'react-google-login';

function Homepage() {

    const login = (response) => {
        console.log(response);}
    const isSignedIn = useSelector(isSignedIn);    
    return (
        <div className="home__page" >
          {!isSignedIn?(
              <div className="login__message">
              <h2>📗</h2>
              <h1>A Readers favourite place!</h1>
              <p>
                We provide high quality online resource for reading blogs. Just sign
                up and start reading some quality blogs.
              </p>
              <GoogleLogin
                  clientId = "850038074590-deuvthkjiv3993keq64bkiqb2cgqo5rh.apps.googleusercontent.com"
                  render = {(renderProps)=>
                      (<button
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                          className="login__button"
                          >
                          Login with Google
                      </button>
                      )}
                  onSuccess = {login}    
                  onFailure = {login}
                  isSignedIn = {true}
                  cookiePolicy = {"single_host_origin"}
              />
            </div>
          ):("")}
        </div>  
    )
}

export default Homepage
