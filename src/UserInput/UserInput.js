import React, { Component } from 'react';
import axios from 'axios';
import Post from '../Post/Post.js';

class UserInput extends Component{

    state={
        posts:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            response =>{
                this.setState({posts:response.data});
                console.log(response);
            }
        );
    }
    render(){
        const posts=this.state.posts.map(post=> {
            return <Post title={post.title} />
        });

        return (
         
        <div>{posts}</div>
                //<input type="text" onChange={this.props.changes} value={this.props.name}></input>
         
        );
    }
}

export default UserInput;