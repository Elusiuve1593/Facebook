import React from "react";
import styleContainer from "../common/styles/Container.module.scss";
import classes from "./Footer.module.scss"
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