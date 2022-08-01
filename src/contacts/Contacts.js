import React from "react";
import classes from "./Contacts.module.scss"
import styleContainer from "../common/styles/Container.module.scss";
import {Contact} from "./contact/Contact";
import {Title} from "../common/components/titile/Title";

export const Contacts = () => {
    return (
        <div className={classes.contactBlock}>
            <div className={`${styleContainer.container} ${classes.contactsContainer}`}>

                <Contact/>
            </div>
        </div>
    )
}