import React from "react";
import classes from "./Contact.module.css";
import {Form} from "./form/Form";
import {Title} from "../../common/components/titile/Title";

export const Contact = (props) => {
    return (
        <div>
            <div className={classes.contact}>
                <Title title={'Contacts'}/>
                <Form/>
            </div>
        </div>
    )
}