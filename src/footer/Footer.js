import React from "react";
import styleContainer from "../common/styles/Container.module.css";
import classes from "./Footer.module.css"
import {Description} from "./description/Description";

export const Footer = () => {
    return (
        <div className={classes.footerBlock}>
            <div className={`${styleContainer.container} ${classes.footerContainer}`}>
                <Description/>
            </div>
        </div>
    )
}