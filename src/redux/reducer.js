import { DECREMENT, INCREMENT,RESET} from "./action-types";

const intialState={
    counter:3,
    timer:0
}

export const  CounterReducer =( state=intialState, action  )=>{

switch (action.type) {
    case INCREMENT:return {...state, counter:state.counter+1} // the most updated counter value: the current counter value+1
    
   case DECREMENT: return { ...state, counter: state.counter&&   state.counter-1 }
   case RESET: return{...state, counter:0 }

    default: return state
    
}

}