import React from "react";
import TextArea from "../components/InputComponent/TextAreaComponent";
import "../assets/main.css";

export default {
    title: "TextArea",
    component: TextArea,
};

export const DefaultTextArea = () => <TextArea /> ;

export const PopulatedTextArea = () => <TextArea value = "React" /> ;