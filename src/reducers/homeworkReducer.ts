import { SHOW_POPUP,HIDE_POPUP,SHOW_ERROR,HIDE_ERROR,ADD_HOMEWORK } from '../actions/types';

const initState = {
    showPopup : false,
    showError : {
        msg:'',
        show:false
    },
    homeworks : [
        {
            standard:'2nd-A',
            subject:'Physics',
            title:'Ex-2 of ch-2',
            description:'Try to complete all the sums',
            homeworkDue:new Date().toString(),
            otherFiles:null
        },
        {
            standard:'2nd-A',
            subject:'Physics',
            title:'Ex-2 of ch-2',
            description:'Try to complete all the sums',
            homeworkDue:new Date().toString(),
            otherFiles:null
        },
        {
            standard:'2nd-A',
            subject:'Physics',
            title:'Ex-2 of ch-2',
            description:'Try to complete all the sums',
            homeworkDue:new Date().toString(),
            otherFiles:null
        },
        {
            standard:'2nd-A',
            subject:'Physics',
            title:'Ex-2 of ch-2',
            description:'Try to complete all the sums',
            homeworkDue:new Date().toString(),
            otherFiles:null
        }

    ]
}

const homeworkReducer = (state=initState,action:any) =>{
    
    const { type,payload } = action;
    console.log(payload);

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

        case ADD_HOMEWORK:
            const homeworks = [...state.homeworks];
            homeworks.push(payload.homework);
            return {
                ...state,
                homeworks
            }
    
        default:
            return state;
    }
}

export default homeworkReducer;