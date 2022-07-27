import React from "react";
import classes from "./Contact.module.css";
import {Form} from "./form/Form";

export const Contact = (props) => {
    return (
        <div>
            <div className={classes.contact}>
                <h2 className={classes.title}>Contacts</h2>
                <Form/>
            </div>
        </div>
    )
}