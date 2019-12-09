import React, {Component} from 'react'
import {API, graphqlOperation} from "aws-amplify";
import * as queries from "../../graphql/queries";
import {Post} from '../../component/Post'


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

        API.graphql(graphqlOperation(queries.listPosts, {limit:5})
        ).then(list =>{
            if(list.data.listPosts){
                this.setState (prev =>({
                    ...prev,
                    isLoading:false,
                    listPosts:list.data.listPosts.items
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
            <div className={"list-blog"}>
                {
                    this.state.listPosts && this.state.listPosts.map(el => <Post {...el}/>)
                }
            </div>
        )
    }

}


export default Home