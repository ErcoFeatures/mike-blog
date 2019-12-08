import React, {Component} from 'react'
import {API, graphqlOperation} from "aws-amplify";
import * as queries from "../../graphql/queries";



class Home  extends Component{
    constructor(props){
        super(props)
            this.state={
                isLoading:false,
                listPosts:[]
            }

    }
    componentDidMount() {
        this.setState (prev =>({
            ...prev,
            isLoading:true,
        }));

        API.graphql(graphqlOperation(queries.listPosts)).then(list =>{
            if(list.data.listPosts){
                this.setState (prev =>({
                    ...prev,
                    isLoading:false,
                    listBlog:list.data.listPosts.items
                }));
            }
        })
    }


    render(){
        if(this.state.isLoading){
            return(
                <div>{"..."}</div>
            )
        }
        return (
            <div className={"list"}>

            </div>
        )
    }

}


export default Home