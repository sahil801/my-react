import React from 'react'
import GoogleLogin from 'react-google-login';
function Homepage() {
    return (
        <div className="home__page" style={{ display: isSignedIn ? "none" : "" }}>
          <div className="login__message">
            <h2>📗</h2>
            <h1>A Readers favourite place!</h1>
            <p>
              We provide high quality online resource for reading blogs. Just sign
              up and start reading some quality blogs.
            </p>
            <GoogleLogin
                clientId = ""
                render = {(renderProps)=>
                    <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="login__button"
                        >
                        Login with Google
                    </button>
                }
            />
          </div>
        </div>  
    )
}

export default Homepage
