import React from "react";
import classes from "./Description.module.css"
import {Item} from "./item/Item";

export const Description = () => {
    return (
        <div className={classes.description}>
            <h2 className={classes.title}>Name</h2>
            <Item/>
            <span>All rights reserved</span>
        </div>
    )
}