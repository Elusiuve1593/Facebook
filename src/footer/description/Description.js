import React from "react";
import classes from "./Description.module.scss"
import {Item} from "./item/Item";
import {Title} from "../../common/components/titile/Title";

export const Description = () => {
    return (
        <div className={classes.description}>
            <Title title={"Name"}/>
            <Item/>
            <span>All rights reserved</span>
        </div>
    )
}