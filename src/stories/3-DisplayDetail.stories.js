import React from 'react';
import '../assets/main.css';
import DisplayDetails from '../components/addHomework/AddHomework';
import store from '../store';
import { Provider } from 'react-redux';

export default {
    title:'Display Detail',
    component:DisplayDetails
}

export const displayDetails = ()=>
<Provider store={store}>
    <DisplayDetails homework={
        {
            homeworks:
            [        
                {
                    createdDate:new Date(),
                    standard:'2nd-A',
                    subject:'Chemistry',
                    title:'Ex-2 of che 2a',
                    description:'Try to complete all the sums',
                    homeworkDue:new Date().toString(),
                    otherFiles:null,
                    id:1
                }
            ]
        }
    } />
</Provider>