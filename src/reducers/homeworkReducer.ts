import { SHOW_POPUP,HIDE_POPUP,SHOW_ERROR,HIDE_ERROR } from '../actions/types';

const initState = {
    showPopup : false,
    showError : {
        msg:'',
        show:false
    }
}

const homeworkReducer = (state=initState,action:any) =>{
    
    const { type,payload } = action;

    switch (type) {
        case SHOW_POPUP:
            return {
                ...state,
                showPopup:payload.showPopup
            }

        case HIDE_POPUP:
            return {
                ...state,
                showPopup:payload.showPopup
            }

        case SHOW_ERROR:
            return {
                ...state,
                showError:{
                    msg:payload.msg,
                    show:true
                }
            }

        case HIDE_ERROR:
            return {
                ...state,
                showError:{
                    msg:'',
                    show:false
                }
            }
    
        default:
            return state;
    }
}

export default homeworkReducer;