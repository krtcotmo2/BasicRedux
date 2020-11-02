const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  name:'Kurt',
  counter: 0,
  actionsTaken:0
}

//reducer must be created first since it is tied to teh sotres creation
//REDUCER
  //recieves 2 paramneters (ths old state (can be assinged an inital state using '=') and an action(actions can contian payloads)) and must return an object (the state)
const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case 'INC_COUNTER':
      return {...state,
      counter: state.counter + 1,
      actionsTaken:state.actionsTaken + 1}
    case 'ADD_COUNTER':
      return {...state,
        counter: state.counter + action.value,
        actionsTaken:state.actionsTaken + 1}
    default:
      return state;
  }
}

//STORE
  //in the state creation the arguemnt is the rducer the store uses.
const store = createStore(rootReducer);

//SUBSRCIPTIONS
  //subscribe is a function with no required objects but has generic callback
store.subscribe( () => {
  console.log('subscription updated', store.getState())
})


// DISPATCHING ACTIONS
  //dispatch is a function that takes an object
  //type is a required param of the function. Recomended to be upper case
  //intentionally created a timer to see delay in calls
store.dispatch({type:'INC_COUNTER'})
setTimeout(function(){
  store.dispatch({type:'ADD_COUNTER', value: 10 });
}, 3000)
console.log("GENERIC CALL", store.getState())

