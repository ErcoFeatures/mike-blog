import React from 'react'
import './styles.css'
import {getMonthByNumber} from "../../utils";
import fr from 'javascript-time-ago/locale/fr'
import JavascriptTimeAgo from 'javascript-time-ago'
import ReactTimeAgo from 'react-time-ago'
// Initialize the desired locales.
JavascriptTimeAgo.locale(fr)
export const Comment = (props) => {

    const date = new Date(props.createdAt)
    const publishAt = (date.getDate())+ " " + getMonthByNumber((date.getMonth() )) + " " + date.getFullYear() + " " + date.getHours()+ ":" + date.getMinutes()

    return (
        <div className={"comment-container"}>
            <div className={"post-header"}>
                <span className={"name"}>{props.createdBy}</span>
                <span>{" | "}</span>
                <ReactTimeAgo date={date} locale={"fr"}/>
            </div>
            <div className={"comment-content"}>
                {props.content}

            </div>
            <div className={"user-interactions"}>
                <i onClick={props.onLikeClick} className={"fa reaction-icon fa-thumbs-up"}> {" (0)"}</i>
                <i onClick={props.onDislikeClick} className={"fa reaction-icon fa-thumbs-down"}>{" (0)"}</i>
            </div>

        </div>
    )
}