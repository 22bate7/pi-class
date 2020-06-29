import React from 'react';
import FileDateTimeInput from '../components/inputComponents/FileDateTimeInput';
import '../assets/main.css';

export default {
    title: 'OtherTextInput',
    component: FileDateTimeInput
}

export const DateInput = () => < FileDateTimeInput type = "date" / >

    export const TimeInput = () => < FileDateTimeInput type = "time" / >
        export const FileInput = () => < FileDateTimeInput type = "file" / >