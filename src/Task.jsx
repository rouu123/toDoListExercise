import React from 'react'
import './App.css';
import { useState } from 'react';
const Task=(props) => {
    const [labelClicked, setLabelClicked] = useState(false);

    const handleLabelClicked = () => {
      setLabelClicked(!labelClicked);
    };

    return(
        <div className="task-class">
        <h2 onClick={handleLabelClicked} className= {labelClicked ? 'h2-clicked' : ''}>{props.texte}</h2>
        <button onClick={props.deleteTask}>delete</button>
        </div>
    );



}

export default Task;
