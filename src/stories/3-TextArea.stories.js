import React from "react";
import TextArea from "../components/InputComponents/TextArea";
import "../assets/main.css";

export default {
    title: "TextArea",
    component: TextArea,
};

export const DefaultTextArea = () => <TextArea /> ;

export const PopulatedTextArea = () => <TextArea value = "React" /> ;