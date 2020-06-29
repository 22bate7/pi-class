import React from 'react';
import TextInput from '../components/inputComponents/textInput';
import '../assets/main.css';

export default {
    title: 'TextInput',
    component: TextInput
}

export const DefaultInput = () => < TextInput / >

    export const PopulatedInput = () => < TextInput value = "React" / >