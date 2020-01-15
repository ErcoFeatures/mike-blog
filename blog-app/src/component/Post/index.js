import React, {Component} from 'react'
import {getMonthByNumber, addEllipsis} from '../../utils'
import './styles.css'
import {Comment} from '../Comments'
import {NavLink} from "react-router-dom";

const Post =(props) => {
    const date = new Date(props.createdAt)
    const publishAt = getMonthByNumber(date.getDate()) + " " + (date.getMonth() + 1) + " " + date.getFullYear();

    return (
        <div className={"post-content"}>
            <div className={"post-title"}>
                {props.title}
            </div>
            <div className={"post-header"}>
                <span>{publishAt}</span>
                <span>{" | "}</span>
                <span> {"By "}</span> <span className={"name"}>{props.createdBy}</span>
                <span>{" | "}</span>
                <span className={"blog-name"}>{props.blogName}</span>
            </div>

            <div className={"post-description"}>
                {props.showFull ? props.description : addEllipsis(props.description, 400)}
            </div>

            {!props.showFull ?
            <div className={"post-footer"}>
                <NavLink to={{
                    pathname: "/post/" + props.id,
                }}> {"Voir plus ..."}</NavLink>

            </div>
            :
                <div className={"number-comments"}>
                    <span>{"commentaires : "}  <span className={"number"}> {props.comments.items.length}</span></span>
                </div>
            }


            {props.showComments &&
            <div className={"comments-section"}>
                <div className={"comments-header"}>
                    {"Commentaires"}
                </div>
                {props.comments.items.map((el,index) => <Comment key={index} {...el}/>)}
            </div>
            }
        </div>
    )
}


export default Post;
