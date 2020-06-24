import { SELECT_CATAGORY } from './types';

export const selectCatagory = (catagory:string) => (dispatch:any) =>{
    dispatch({
        type:SELECT_CATAGORY,
        payload : {
            catagory
        }
    })
}