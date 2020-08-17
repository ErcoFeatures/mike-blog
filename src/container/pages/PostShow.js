import React, {Component} from 'react'
import Post from "../../component/Post";
import {Loader} from "../../component/Loader";
import {API, graphqlOperation} from "aws-amplify";
import * as queries from "../../graphql/queries";

import {withRouter} from 'react-router-dom'

class PostShow  extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            post: null
        }

    }

    componentDidMount() {

        this.setState(prev => ({
            ...prev,
            isLoading: true,
        }));
        const {id} = this.props.match.params;
        API.graphql(graphqlOperation(queries.getPost, {id: id})
        ).then(post => {
            if (post.data.getPost) {
                this.setState(prev => ({
                    ...prev,
                    isLoading: false,
                    post: post.data.getPost
                }));
            }
        })
    }

    render() {
        if(this.state.isLoading){
            return(
                <Loader/>
            )
        }
        return (
            <div className={"show-post"}>
                {this.state.post && <Post showFull={true} {...this.state.post}  showComments={true}></Post>}
            </div>
        )
    }

}


export default withRouter(PostShow)