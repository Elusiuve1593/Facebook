import React from "react";
import classes from "./Projects.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";
import {Title} from "../common/components/titile/Title";
import toDoImage from "../assets/image/toDoList.jpg"
import socialNetworkImage from "../assets/image/socialNetwork.jpg"

export const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImage})`
    }
    const toDoList = {
        backgroundImage: `url(${toDoImage})`
    }
    return (
        <div className={classes.projectBlock}>
            <div className={`${styleContainer.container} ${classes.projectContainer}`}>
                <Title title={"My works!"}/>
                <div className={classes.projects}>
                    <Project style={socialNetwork} projectName={"Social-Network"}
                             description={"The world's most popular social networking web site. Enables users to connect with friends and family by sharing status updates, personal photos and other items of interest. 1"}/>
                    <Project style={toDoList} projectName={"Todo-List"}
                             description={"Organize your work and life, finally. Become focused, organized, and calm with Todolist. The world’s #1 task manager and to-do list app."}/>
                </div>
            </div>
        </div>
    )
}