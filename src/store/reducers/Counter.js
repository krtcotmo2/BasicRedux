import * as actions from '../actions';

const initialState = {
  name:'Kurt',
  counter: 0,
  actionsTaken:0,
}

const counterReducer = (state = initialState, action) =>{
  if(action.type === actions.INCREMENT){
    return {
      ...state,
      counter: state.counter + 1,
      actionsTaken: state.actionsTaken + 1,
    }
  }
  if(action.type === actions.ADD){
    return {
      ...state,
      counter: state.counter + action.value,
      actionsTaken: state.actionsTaken + 1,
    }
  }
  if(action.type === actions.DECREMENT){
    return {
      ...state,
      counter: state.counter - 1,
      actionsTaken: state.actionsTaken + 1,
    }
  }
  if(action.type === actions.SUBTRACT){
    return {
      ...state,
      counter: state.counter - action.value,
      actionsTaken: state.actionsTaken + 1,
    }
  }
  
  return state;
}

export default counterReducer