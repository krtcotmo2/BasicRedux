import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={`${this.props.ctr} Name: ${this.props.name} Actions: ${this.props.actionsTaken}`}   />
                <CounterControl label="Increment" clicked={this.props.incCounter}/>
                <CounterControl label="Decrement" clicked={this.props.decCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.addCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.subCounter(5)}/>
                <hr/>
                <button onClick={() => this.props.addArr(this.props.ctr)}>Store Results</button>
                <ul>
                  {this.props.resArr.map( item =><li key={item.id} onClick={() => this.props.removeArr(item.id)}>{item.id} {item.value}</li>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state)  =>{
  return {
    ctr:state.ctr.counter,
    name:state.ctr.name,
    actionsTaken: state.ctr.actionsTaken,
    resArr: state.res.results
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incCounter: () => dispatch({type:actions.INCREMENT}),    
    decCounter: () => dispatch({type:actions.DECREMENT}),    
    addCounter: (val) => dispatch({type:actions.ADD, value:val}),    
    subCounter: (val) => dispatch({type:actions.SUBTRACT, value:val}),
    addArr: (val) => dispatch({type: actions.ADJARR, payload:val}),
    removeArr: (id) => dispatch({type: actions.REMOVEARR, payload: id}),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);