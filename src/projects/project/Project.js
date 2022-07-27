import React from "react";
import classes from "./Project.module.css";

export const Project = (props) => {
    return (
        <div className={classes.project}>
            <div className={classes.photo}>
                <div className={classes.anchor}>
                    <button>Watch!</button>
                </div>
            </div>
            <h2>{props.projectName}</h2>
            <span>{props.description}</span>
        </div>
    )
}