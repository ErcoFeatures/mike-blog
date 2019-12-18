import React, {Component} from 'react'
import {graphqlOperation} from "aws-amplify";
import * as queries from "../../graphql/queries";
import Post from '../../component/Post'
import {Card} from '../../component/BlogCard'
import {PulseLeader} from '../../component/Loader'


class Home  extends Component{
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

        this.props.api.graphql(graphqlOperation(queries.listBlogs )
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
        return (
            <div className={"list-blog"}>
                {
                    this.state.listBlog && <Card {...this.state}/>
                }
            </div>
        )
    }

}


export default Home