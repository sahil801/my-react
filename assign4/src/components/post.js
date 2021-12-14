import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { fetchPost } from '../actions/postAction';

class Post extends Component {
    componentWillMount(){
        this.props.fetchPost();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost)
        }
    }
    render () {
        const postItems = this.props.posts.map(post=>{
               return (<div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>)
        }
        );
        return (
        <div>
                <h1>posts</h1>
                <div>
                    {postItems }
                </div>
        </div>);
    }
}
Post.propTypes = {
    fetchPost : PropTypes.func.isRequired,
    posts : PropTypes.array.isRequired,
    newPost : PropTypes.object
}
const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost : state.posts.item
});
export default connect (mapStateToProps,{fetchPost})(Post);
