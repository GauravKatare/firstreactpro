import React, { Component } from 'react';
import './UserOutput.css';
class UserOutput extends Component{
    
    render(){
        return (
            <div className="UserOutput">
                <p>Hello I m { this.props.name } </p>
                <p>I m intern at {this.props.work} </p>
            </div>
        );
    }
}

export default UserOutput;