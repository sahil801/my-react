import React ,{ useState, useEffect,Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createPost} from '../actions/postAction';
import {useSelector,useDispatch} from 'react-redux';



class PostForm extends Component {
      constructor(props) {
        super(props);
        this.state = {
          title: '',
          body: ''
        };
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const post = {
          title: this.state.title,
          body: this.state.body
        };
    
        this.props.createPost(post);
      }
    
      render() {
        return (
          <div>
            <h1>Add Post</h1>
            <form onSubmit={this.onSubmit}>
              <div>
                <label>Title: </label>
                <br />
                <input
                  type="text"
                  name="title"
                  onChange={this.onChange}
                  value={this.state.title}
                />
              </div>
              <br />
              <div>
                <label>Body: </label>
                <br />
                <textarea
                  name="body"
                  onChange={this.onChange}
                  value={this.state.body}
                />
              </div>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      }
    }
PostForm.propTypes = {
  createPost : PropTypes.func.isRequired
}
export default connect(null,{createPost})(PostForm);

// const PostForm = () =>{
//     const [postobj , setPost] = useState({title :'',body:''});
//     // const post = useSelector(state.posts);
//     const handelChange =(event)=>{
//         setPost( previousState => {return ({ ...previousState,[event.target.name] : event.target.value }) } )
//     }
//     const HandelSubmit = async (event) =>{
//         event.preventDefault();
//         useDispatch(createPost(postobj));
//     }
//     return (
//         <div>
//             <h1>Add Post</h1>
//             <form>
//                 <div>
//                     <label>Title:</label><br/>
//                     <input onChange = {handelChange} type="text" name="title" />
//                 </div>
//                 <div>
//                     <label>Body:</label><br/>
//                     <textarea onChange = {handelChange} name="body"/>
//                 </div>
//                 <br/>
//                 <button  type="submit" onClick={HandelSubmit}>Post</button>
//             </form>
//         </div>
//     )
// }
// export default PostForm;