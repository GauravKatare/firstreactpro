import React from 'react';


const Validation =(props) => {
    var strs='Too short';
    
    if(props.lentext>5){
        strs='Too length';
    }

    return (
        <div>
            <p>Length of text {props.lentext}</p>
            {strs}
        </div>
            //<input type="text" onChange={this.props.changes} value={this.props.name}></input>
    );
}

export default Validation;