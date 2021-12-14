import React from 'react';
import { Avatar } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { isSignedIn ,userData} from '../features/userSlice';

function Navbar() {
    const signin = useSelector(isSignedIn);
    const data = useSelector(userData);
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
                <button className="submit" onClick={handleClick}>
                    Search
                </button>
                </div>
            )}
            {signin?(
            <div>
                <Avatar></Avatar>
            </div>):("")}
        </div>
    )
}

export default Navbar
