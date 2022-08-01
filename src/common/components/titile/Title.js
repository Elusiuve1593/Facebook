import React from "react";
import classes from "./Title.module.scss";

export const Title = (props) => {
    return (
        <div className={classes.title}>
            <h2>{props.title}</h2>
        </div>

    )
}