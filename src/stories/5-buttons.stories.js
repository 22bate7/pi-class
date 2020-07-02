import React from "react";
import ButtonComponent from "../components/ButtonComponents/Button";
import "../assets/main.css";

export default {
    title: "Buttons",
    component: ButtonComponent,
};

export const Button = () => (
    <ButtonComponent 
        className = 'button'
        text = "Homework"
    />
);

export const outlinebtn = () => (
    <ButtonComponent 
        className = 'outline-btn'
        text = "React"
    />
);

export const deleteBtn = () => (
    <ButtonComponent 
        className = 'outline-btn delete'
        text = "Delete"
    />
);

export const markDoneBtn = () => ( 
    <ButtonComponent 
        className = 'outline-btn done'
        text = "Mark as Done"
    />
);

export const updateBtn = () => ( 
    <ButtonComponent 
        className = 'outline-btn update'
        text = "Update"
    />
);