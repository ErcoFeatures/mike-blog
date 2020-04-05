import React, {Component} from 'react'
import * as queries from "../../graphql/queries";
import {PulseLeader} from "../../component/Loader";
import Post from "../../component/Post";

import {API, graphqlOperation} from "aws-amplify";


class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            blog: null
        }

    }

    componentDidMount() {
        this.setState(prev => ({
            ...prev,
            isLoading: true,
        }));


        const {id} = this.props.match.params;
        API.graphql(graphqlOperation(queries.getBlog, {id: id})
        ).then(blog => {
            if (blog.data.getBlog) {
                this.setState(prev => ({
                    ...prev,
                    isLoading: false,
                    blog: blog.data.getBlog
                }));
            }
        })
    }


    render() {
        if (this.state.isLoading) {
            return (
                <PulseLeader color={"#F7AE54"}/>
            )
        }
        return (
            <div className={"list-blog"}>
                {
                    this.state.blog && this.state.blog.posts.items.map(el => <Post key={el.id} blogName={this.state.blog.name} {...el}/>)
                }
            </div>
        )
    }


}


export default Blog