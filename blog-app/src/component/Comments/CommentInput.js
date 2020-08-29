import React from 'react'
import {Button} from "../../component/Button";
export  const CommentInput = (props) => {

        return (
            <div>
                <textarea value={props.value} placeholder={"Ajouter un commentaire ..."}
                        onChange={(e)=> props.onCommentChange(e)}/>
                <Button classStyle={"add"} handleClick={()=>props.addComment()} label={"Poster mon commentaire"}/>
            </div>
        )
    }

