import React, {Component} from 'react'
import * as queries from '../../graphql/queries'
import * as mutations from '../../graphql/mutations'
import Editor from "../../component/Editor";

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
    }

    handleShowCreatePost(){
        this.setState(prev => ({
            ...prev,
            show: !prev.show
        }))
    }
    doCreate(){
        
    }

    render (){
        return (
            <div>
                <button onClick={this.handleShowCreatePost}>{"Créer un Article"}</button>

                    {
                        this.state.show && <div className={"col-xs-12"}>

                            <div className={"col-xs-12"}>
                                <div className={"col-xs-3"}>
                                    {"title : "}
                                </div>
                                <div className={"col-xs-9"}>
                                    <input type={"text"}/>
                                </div>
                            </div>
                            <div className={"col-xs-12"}>
                                <div className={"col-xs-3"}>
                                    {"description"}
                                </div>
                                <div className={"col-xs-9"}>
                                    {
                                        <Editor/>
                                    }
                                </div>
                            </div>
                            <div className={"col-xs-12"}>
                                <div className={"col-xs-3 .offset-md-9"}>
                                    <button onClick={this.doCreate}> {"Add"} </button>
                                </div>
                            </div>

                        </div>
                    }
            </div>
        )
    }
}

export default NewPost