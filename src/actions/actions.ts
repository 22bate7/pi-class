import { SELECT_CATAGORY,SHOW_POPUP,HIDE_POPUP,SHOW_ERROR,HIDE_ERROR,ADD_HOMEWORK } from './types';

export const selectCatagory = (catagory:string) => (dispatch:any) =>{
    dispatch({
        type:SELECT_CATAGORY,
        payload : {
            catagory
        }
    })
}

export const showPopup = ()=> (dispatch:any)=>{
    dispatch({
        type:SHOW_POPUP,
        payload : {
            showPopup:true
        }
    })
}

export const hidePopup = ()=> (dispatch:any)=>{
    dispatch({
        type:HIDE_POPUP,
        payload : {
            showPopup:false
        }
    })
}

export const showError = (msg:string)=>(dispatch:any)=>{
    dispatch({
        type:SHOW_ERROR,
        payload:{
            msg
        }
    });

    setTimeout(()=>{
        dispatch({
            type:HIDE_ERROR
        })
    },5000);
}

export const addHomework = (homework:any)=>(dispatch:any)=>{
    dispatch({
        type:ADD_HOMEWORK,
        payload:{
            homework
        }
    })
}