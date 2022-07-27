import React from "react";
import classes from "./Form.module.css";

export const Form = () => {
    return (
        <div>
            <form className={classes.form}>
                <input type="text"/>
                <input type="text"/>
                <textarea/>
                <button type="submit" className={classes.btn}>SEND</button>
            </form>
        </div>
    )
}