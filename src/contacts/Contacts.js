import React from "react";
import classes from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css";
import {Contact} from "./contact/Contact";

export const Contacts = () => {
    return (
        <div className={classes.contactBlock}>
            <div className={`${styleContainer.container} ${classes.contactsContainer}`}>
                <Contact/>
            </div>
        </div>
    )
}