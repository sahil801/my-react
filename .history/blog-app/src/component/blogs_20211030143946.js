import React ,{useEffect, useState}from 'react'
import axiox from 'axios';
import {useSelector,useDispatch} from 'react-redux';
import {searchInput,setSearchInput ,setBlogData} from '../features/userSlice';

function Blogs() {
    const input = useSelector(searchInput);
    const blogUrl = `https://gnews.io/api/v4/search?q=${input}&token=6b9b5a2e8198bde72c8c715f96677ef7`;
    const dispatch = useDispatch();
    const [blogs,setBlogs] = useState();
    const [loding,setLoding] = useState(true);

    useEffect(()=>{
        axiox.get(blogUrl).then(
            (response)=>{
                dispatch(setBlogData(response.data));
                setBlogs(response.data());
                setLoding(false)
            }
        ).catch((error)=>{console.log(error)})
    },[input])
    return (
        <div>
            <div className="blog__page">
                {loding?(<h1 className="blog__page__header">Loading....</h1>):""}
                <div className="blogs">
                    blogs
                </div>
            </div>
        </div>
    )
}

export default Blogs
