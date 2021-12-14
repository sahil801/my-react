import React ,{ useState } from 'react';
import { Avatar } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { GoogleLogout } from "react-google-login";
import { isSignedIn ,userData} from '../features/userSlice';

function Navbar() {
    const signin = useSelector(isSignedIn);
    const data = useSelector(userData);
    const [inputValue,setInputValue] =  useState("tech");
    const logout = (response) =>{
        console.log(response)
    }
    return (
        <div className="navbar">
            <h1 className="">Blog_Nav</h1>
            {isSignedIn && (
                <div className="blog__search">
                <input
                    className="search"
                    placeholder="Search for a blog"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="submit" onClick={()=>[]}>
                    Search
                </button>
                </div>
            )}
            {signin?(
            <div>
                <Avatar src = {data?.imageUrl}></Avatar>
                <h1 className="signedIn">{data?.givenName}</h1>
                {/* <img src = {data?data.imageUrl:null} /> */}
                <GoogleLogout
                    clientId="850038074590-deuvthkjiv3993keq64bkiqb2cgqo5rh.apps.googleusercontent.com"
                    render={(renderProps) => (
                    <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="logout__button"
                    >
                        Logout 😦
                    </button>
                    )}
                    onLogoutSuccess={logout}
                />
            </div>):("")}
        </div>
    )
}

export default Navbar
