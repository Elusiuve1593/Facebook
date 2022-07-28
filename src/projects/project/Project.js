import React from "react";
import classes from "./Project.module.css";

export const Project = (props) => {
    return (
        <div className={classes.project}>
            <div className={classes.photo} style={props.style}>
                <div className={classes.anchor}>
                    {props.projectName === "Social-Network" ?
                        <a target={"_blank"} href={"https://elusiuve1593.github.io/SocialNetwork/"}>Watch!</a> :
                        <a target={"_blank"} href={"https://elusiuve1593.github.io/toDoList/"}>Watch!</a>}
                </div>
            </div>
            <div className={classes.projectInfo}>
                <h3 className={classes.projectTitle}>{props.projectName}</h3>
                <span className={classes.description}>{props.description}</span>
            </div>
        </div>
    )
}