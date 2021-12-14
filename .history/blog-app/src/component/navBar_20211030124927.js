import React ,{ useState } from 'react';
import { Avatar } from "@material-ui/core";
import { useSelector ,useDispatch} from 'react-redux';
import { GoogleLogout } from "react-google-login";
import { isSignedIn ,userData,setIsSignedIn,setUserData} from '../features/userSlice';
import "../style/navbar.css";

function Navbar() {
    const signin = useSelector(isSignedIn);
    const data = useSelector(userData);
    const [inputValue,setInputValue] =  useState("tech");
    const diapatch = useDispatch();
    const logout = (response) =>{
        console.log(response)
        diapatch(setIsSignedIn(false))
        diapatch(setUserData(null));
    }
    return (
        <div className="navbar">
            <h1 className="navbar__header">Blog_Nav</h1>
            {signin && (
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
            <div className="navbar__user__data">
                <Avatar src = {data?.imageUrl} className="user"></Avatar>
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
