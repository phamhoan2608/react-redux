const INCREMENT = "increment";
const DECREMENT = "decrement";
const INCREMENT_VALUE = "decrementValue";
const initialState = {
  count: 0,
}

export const increment = () => ( {
  type: INCREMENT,
});
export const decrement = () => ( {
  type: DECREMENT,
});
export const incrementValue = (value) => ({
  type: INCREMENT_VALUE,
  payLoad: value
});

function counterReducer(state = initialState, action) {
  switch(action.type) {
    case INCREMENT : 
      return {
         ...state, count: state.count + 1 
      }
    case DECREMENT : 
      return {
         ...state, count: state.count - 1 
      }
    case INCREMENT_VALUE : 
      return {
         ...state, count: state.count + action.payLoad
      }
    default: 
      return state;
  }
}
export default counterReducer