import React from 'react';
import TitleBox from '../components/titleBox/title';
import '../assets/main.css';
import styles from '../assets/showDetail.module.scss';

export default {
    title: 'Title box',
    component: TitleBox
}

export const Title = () => < TitleBox
text = "Hello React"
className = {
    styles["main-title"]
}
/>