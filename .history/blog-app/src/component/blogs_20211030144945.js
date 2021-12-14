import React ,{useEffect, useState}from 'react'
import axiox from 'axios';
import {useSelector,useDispatch} from 'react-redux';
import {searchInput,setSearchInput ,setBlogData} from '../features/userSlice';
import '../style/blog.css'

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
                setLoding(false);
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
                <div className="blogs">
                    {blogs?.articles?.map((blog) => (
                    <a className="blog" target="_blank" href={blog.url}>
                        <img src={blog.image} />
                        <div>
                        <h3 className="sourceName">
                            <span>{blog.source.name}</span>
                            <p>{blog.publishedAt}</p>
                        </h3>
                        <h1>{blog.title}</h1>
                        <p>{blog.description}</p>
                        </div>
                    </a>
                    ))}

                    {blogs?.totalArticles === 0 && (
                    <h1 className="no__blogs">
                        No blogs available 😞. Search something else to read blogs on the
                        greatest platform.
                    </h1>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Blogs
