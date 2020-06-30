import React from 'react';
import ButtonComponent from '../components/buttonComponents/button';
import '../assets/main.css';
import styles from '../assets/showDetail.module.scss';
import styles1 from '../assets/addHomework.module.scss';

export default {
    title: 'Buttons',
    component: ButtonComponent
}

export const AddHomeworkBtn = () => < ButtonComponent className = {
    `${styles1['addHomework-btn']} addHomework-btn`
}
text = {
    'Add Homework'
}
/>

export const deleteBtn = () => < ButtonComponent className = {
    `${styles['delete']} delete`
}
text = {
    "Delete"
}
/>

export const markDoneBtn = () => < ButtonComponent
className = {
    `${styles['done']} done`
}
text = {
    "Mark as Done"
}
/>

export const updateBtn = () => < ButtonComponent
className = {
    `${styles['update']} update`
}
text = {
    "Update"
}
/>