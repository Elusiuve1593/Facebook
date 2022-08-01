import React from "react";
import classes from "./Skill.module.scss"

export function Skill(props) {
    return (
        <div className={classes.skill}>
            <div className={classes.icon}></div>
            <h3 className={classes.title}>{props.title}</h3>
            <span className={classes.description}>{props.description}</span>
        </div>
    )
}