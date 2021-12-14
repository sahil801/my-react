import React, { Component } from 'react';
class Counter extends React.Component {
    styles = {
        fontSize : 20,
        fontWeight : "bold"
    }
    render() { 
            return <div>
                <span style = {this.styles} className ={ this.getBadgeClass()}>{this.formatCount()}</span>
                <button onClick={()=>this.props.onIncriment(this.props.counter)} className="btn btn-secondry btn-sm">incriment</button>
                <button onClick={()=>this.props.ondelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>;
    }
    rendeTags (){
        if(this.state.tag.length===0) return <p>There are no tags</p>;
        return <ul>{this.state.tag.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }
    getBadgeClass() {
        let classes = "m-2 badge badge-";
        classes += this.props.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount (){
        const count = this.props.value;
        return count===0 ? 'zero' : count;
    };
}
 
export default Counter;