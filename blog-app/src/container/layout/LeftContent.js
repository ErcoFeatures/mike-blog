import React, {Component} from 'react'
import Profile from "../../component/Profile";
import {NavLink} from 'react-router-dom'
import * as queries from "../../graphql/queries";
import {API, graphqlOperation} from "aws-amplify";
import {PulseLeader} from "../../component/Loader";
class LeftContent extends Component{

    constructor(props){
        super(props)
        this.state={
            isLoading:false,
            listBlog:[]
        }
    }

    componentDidMount() {
        this.setState (prev =>({
            ...prev,
            isLoading:true,
        }));

        API.graphql(graphqlOperation(queries.listBlogs)
        ).then(list =>{
            if(list.data.listBlogs){
                this.setState (prev =>({
                    ...prev,
                    isLoading:false,
                    listBlog:list.data.listBlogs.items
                }));
            }
        })
    }
    render(){
        if(this.state.isLoading){
            return(
                <PulseLeader color={"#F7AE54"}/>
            )
        }

        return(
            <div>
                <Profile/>

            </div>
        )
    }

}

export default LeftContent