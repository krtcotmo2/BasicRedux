import * as actions from '../actions';


const initialState = {
  results:[],
}

const ressultReducer = (state = initialState, action) =>{

  if(action.type === actions.ADJARR){
    return {
      ...state,
      results: state.results.concat({id: new Date().getTime(), value:action.payload})
  }
  }
  if(action.type === actions.REMOVEARR){
    let temp = [...state.results];
    let a = temp.filter(b => b.id !== action.payload);
    return {
      ...state,
      actionsTaken: state.actionsTaken + 1,
      results: a
    }
  }
  return state;
}

export default ressultReducer