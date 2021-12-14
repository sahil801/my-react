import React from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { isSignedIn ,setIsSignedIn , setUserData} from '../features/userSlice';
import GoogleLogin from 'react-google-login';
import Navbar from './navBar';

function Homepage() {
    const dispatch = useDispatch();
    const login = (response) => {
        console.log(response);
        dispatch(setIsSignedIn(true));
        dispatch(setUserData(response.profileObj))

    }
    const signedIn = useSelector(isSignedIn);    
    return (
        <div className="home__page" >
            <Navbar/>
          {!signedIn?(
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
