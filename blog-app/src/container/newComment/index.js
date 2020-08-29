import React, {Component} from 'react'
import {CommentInput} from "../../component/Comments/CommentInput";
import {API, graphqlOperation} from "aws-amplify";
import * as mutations from "../../graphql/mutations";


class NewComment extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            value:'',
            inputError: null
        }
        this.onCommentChange = this.onCommentChange.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    onCommentChange(e) {
        const value = e.target.value;
        this.setState({
            value
        })

    }
    addComment() {
        let {value} = this.state;
        let currentDate = new Date();
        const ISODate = currentDate.toISOString()
        this.setState({
            inputError: value === ""
        }, () => {
            if (!this.state.inputError)
                API.graphql(graphqlOperation(mutations.createComment, {
                    input: {
                        content:value,
                        commentPostId:this.props.postId,
                        createdBy:"Mike",
                        createdAt: ISODate,
                    }
                }))
        })
    }

    render () {
        return (
            <div className={"new-comment-container"}>
                <CommentInput
                    {...this.state}
                    onCommentChange={this.onCommentChange}
                    addComment={this.addComment}
                />
            </div>
        )
    }

}


export  default NewComment