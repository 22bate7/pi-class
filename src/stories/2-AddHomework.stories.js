import React from 'react';
import AddHomework from '../components/addHomework/AddHomework';
import store from '../store';
import '../assets/main.css';
import { Provider } from 'react-redux';

export default {
    title:'AddHomework',
    component:AddHomework
}

const state = {
    homework:store.getState().homework,
    hidePopup:null,
    showError:null,
    addHomework:null
}

export const addHomework = () => 
<Provider store={store}>
    <AddHomework {...state}/>
    {console.log(store.getState().homework)}
</Provider>