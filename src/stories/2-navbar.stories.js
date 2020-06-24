import React from 'react';
import Navbar from '../components/layout/Navbar';
import { linkTo } from '@storybook/addon-links';
import '../assets/navbar.scss';

export default {
    title:'Navbar',
    component:Navbar
}

export const navbar = () => <Navbar showApp={linkTo('Navbar')}/>