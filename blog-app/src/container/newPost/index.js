import React, {Component} from 'react'
import * as queries from '../../graphql/queries'
import * as mutations from '../../graphql/mutations'
import Editor from "../../component/Editor";
import {API, graphqlOperation} from "aws-amplify";
import Modal from "../../component/Modal";
import {Button} from "../../component/Button";
import {Index} from '../../component/AddPostModal'

class NewPost extends Component{
    constructor(props){
        super(props);
        this.state={
            show:false,
            title:"",
            description:""
        }
        this.handleShowCreatePost = this.handleShowCreatePost.bind(this);
        this.doCreate = this.doCreate.bind(this);
        this.close = this.close.bind(this);
    }

    handleShowCreatePost(){
        this.setState(prev => ({
            ...prev,
            show: !prev.show
        }))
    }
    close(){
        this.setState(prev => ({
            ...prev,
            show: false
        }))
    }
    doCreate(){

    }

    render (){
        return (
            <div>
                <Button handleClick={this.handleShowCreatePost} label={"Créer un Article"}/>
                <Index {...this.state} close={this.close} doCreate={this.doCreate}/>
            </div>
        )
    }
}

export default NewPost

