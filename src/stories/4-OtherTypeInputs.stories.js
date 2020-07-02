import React from 'react';
import FileDateTimeInput from '../components/InputComponents/FileDateTimeInput';
import '../assets/main.css';

export default {
    title: 'OtherTextInput',
    component: FileDateTimeInput
}

export const DateInput = () => < FileDateTimeInput className = "input"
type = "date" / >

    export const TimeInput = () => < FileDateTimeInput className = "input"
type = "time" / >
    export const FileInput = () => < FileDateTimeInput className = "input"
type = "file" / >