import React from 'react';
import Navbar from '../components/Layout/Navbar';
import {
    linkTo
} from '@storybook/addon-links';
import {
    BrowserRouter
} from 'react-router-dom';
import '../assets/main.css';

export default {
    title: 'Navbar',
    component: Navbar
}

export const navbar = () => 
<BrowserRouter>
    <Navbar showApp = {linkTo('Navbar')} /> 
</BrowserRouter>