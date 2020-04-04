import React, {Component} from 'react'
import MyContext from "../MyContext";
import {API, graphqlOperation} from "aws-amplify";
import * as queries from "../graphql/queries";
import {PulseLeader} from "../component/Loader";


class MyProvider extends Component {

    state = {
        blogList: [],
        isLoading: false,
    }

    componentDidMount() {
        this.setState(prev => ({
            ...prev,
            isLoading: true,
        }));
        API.graphql(graphqlOperation(queries.listBlogs)
        ).then(list => {
            if (list.data.listBlogs) {
                this.setState(prev => ({
                    ...prev,
                    isLoading: false,
                    blogList: list.data.listBlogs.items
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
            <MyContext.Provider
                value={{
                    blogList: this.state.blogList,
                    getBlogByName: name => {
                        const blogListTmp = this.state.blogList.slice(0);
                        return blogListTmp.filter(b => b.name === name)[0]
                    }
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;