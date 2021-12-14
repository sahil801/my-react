import React, { Component } from 'react';
import Counter from './counter';
class counter1 extends React.Component {
    state = {
        counters : [
        {id: 1, value: 0},
        {id: 2, value: 1},
        {id: 3, value: 2},
        {id: 4, value: 3},
        {id: 5, value: 4},
        ]
    }
    render() { 
        return (
        <div>
            <button className="btn btn-primary m-2" onClick={this.handelreset}>Reset</button>
            {this.state.counters.map(tag => 
            <Counter counter={tag} key= {tag.id} id={tag.id} value={tag.value} ondelete={this.onDelete} onIncriment ={this.onIncriment}/>)}
        </div>);
    }
    onDelete=(counterid)=>{
        const counters = this.state.counters.filter(counter => counter.id!==counterid);
        this.setState({counters: counters});
    }
    onIncriment=(count)=>{
        const counters = [...this.state.counters];
        const ind = counters.indexOf(count);
        counters[ind]= {...count};
        counters[ind].value++;
        this.setState({counters})
    }
    handelreset=()=>{
        const counters = this.state.counters.map(c=> {c.value= 0; return c});
        this.setState({counters})
    }
}
 
export default counter1;