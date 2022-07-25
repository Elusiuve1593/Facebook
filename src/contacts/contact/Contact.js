import React from "react";
import classes from "./Contacts.module.css";

export const Contact = (props) => {
    return (
        <div>
            <h2 className={classes.title}>Contacts</h2>
            <button>SEND</button>
        </div>
    )
}