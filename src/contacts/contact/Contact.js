import React from "react";
import classes from "./Contact.module.scss";
import {Title} from "../../common/components/titile/Title";

export const Contact = () => {
    return (
        <div>
            <div className={classes.contact}>
                <Title title={'Contacts'}/>
                <div className={classes.contactInfo}>
                    <span>Email: elusiuve15.09.93@gmail.com </span> <br/>
                    <span>Phone number: +380 (63) 932 48 56 </span> <br/>
                    <span>Telegram: @elusiuve </span> <br/>
                    <span>LinkedIn: <a target="_blank"
                                       href={"https://www.linkedin.com/in/roma-panchoshnyi-71440a134/"}>LinkedIn</a> </span>
                    <br/>
                    <span>Facebook: <a target="_blank"
                                       href={"https://www.facebook.com/elusiuve/"}>Facebook</a> </span>
                    <br/>
                </div>
            </div>
        </div>
    )
}