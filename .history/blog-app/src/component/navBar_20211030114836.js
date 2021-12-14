import React from 'react';
import { useSelector } from 'react-redux';
import { isSignedIn ,userData} from '../features/userSlice';

function Navbar() {
    const signin = useSelector(isSignedIn);
    const data = useSelector(userData);
    return (
        <div className="navbar">
            <h1 className="">Blog_Nav</h1>
            {signin?(
            <div>
                <image src= {data.imageUrl}/>
            </div>):("")}
        </div>
    )
}

export default Navbar
