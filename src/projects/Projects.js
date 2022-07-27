import React from "react";
import classes from "./Project.module.css";
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={classes.projectBlock}>
            <div className={`${styleContainer.container} ${classes.projectContainer}`}>
                <h2 className={classes.title}>My works!</h2>
                <div className={classes.projects}>
                    <Project projectName={"Social-Network"} description={"Some description 1"}/>
                    <Project projectName={"Todo-List"} description={"Some description 2"}/>
                </div>
            </div>
        </div>
    )
}