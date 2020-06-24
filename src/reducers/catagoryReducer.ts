import { SELECT_CATAGORY } from '../actions/types'

const initState = {
    catagories :['Class-wise','Subject-wise','Date-wise'],
    selectedCatagory:'Class-wise'
}

const catagoryReducer = (state=initState,action: any)=>{
    const { type,payload } = action;
    switch (type) {
        case SELECT_CATAGORY:
            return {
                ...state,
                selectedCatagory:payload.catagory
            }
    
        default:
            return state;
    }
}

export default catagoryReducer;