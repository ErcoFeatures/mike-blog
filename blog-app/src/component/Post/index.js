import React, {Component} from 'react'
import {getMonthByNumber, addEllipsis} from '../../utils'
import {API, graphqlOperation} from "aws-amplify";
import './styles.css'
import {NavLink} from "react-router-dom";
import * as queries from "../../graphql/queries";
import {Loader} from "../Loader";

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
                <span className={"blog-name"}>{props.blog.name}</span>
            </div>

            <div className={"post-description"}>
                {props.showFull ? props.description : addEllipsis(props.description, 400)}
            </div>
            <div className={"number-comments"}>
                <span>{"commentaires : (0)"}</span>
            </div>
            {!props.showFull && <div className={"post-footer"}>
                <NavLink to={{
                    pathname: "/post/" + props.id,
                }}> {"Voir plus ..."}</NavLink>

            </div>}
        </div>
    )
}


export default Post;
