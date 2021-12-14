import React from 'react'
import {useSelector} from 'react-redux';
import {searchInput} from '../features/userSlice';

function Blogs() {
    const input = useSelector(searchInput);
    const blogUrl = `https://gnews.io/api/v4/search?q=${input}&token=6b9b5a2e8198bde72c8c715f96677ef7`
    return (
        <div>
            
        </div>
    )
}

export default Blogs
