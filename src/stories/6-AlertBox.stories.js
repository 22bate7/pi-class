import React from 'react';
import AlertBox from '../components/AlertComponent/AlertComponent';
import '../assets/main.css';

export default {
    title: 'AlertBox',
    component: AlertBox
}

export const errorAlert = () => 
    <AlertBox 
        className = "error"
        msg = "error"
    />
    export const successAlert = () => 
    <AlertBox 
        className = "success"
        msg = "success" 
    />