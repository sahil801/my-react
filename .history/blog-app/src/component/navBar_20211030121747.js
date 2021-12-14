import React ,{ useState } from 'react';
import { Avatar } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { GoogleLogout } from "react-google-login";
import { isSignedIn ,userData} from '../features/userSlice';

function Navbar() {
    const signin = useSelector(isSignedIn);
    const data = useSelector(userData);
    const [inputValue,setInputValue] =  useState("tech");
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
            </div>):("")}
        </div>
    )
}

export default Navbar
