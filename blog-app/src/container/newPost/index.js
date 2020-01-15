import React, {Component} from 'react'
import * as queries from '../../graphql/queries'
import * as mutations from '../../graphql/mutations'
import {API, graphqlOperation} from "aws-amplify";
import Modal from "../../component/Modal";
import {Button} from "../../component/Button";
import ReactQuill from "react-quill";
import './styles.css'
class NewPost extends Component{
    constructor(props){
        super(props);
        this.state={
            show:false,
            title:"",
            description:"",
            blog:""
        };
        this.handleShowCreatePost = this.handleShowCreatePost.bind(this);
        this.doCreate = this.doCreate.bind(this);
        this.close = this.close.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onSelectBlog = this.onSelectBlog.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
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
        let {title, description, blog} = this.state
        API.graphql(graphqlOperation(mutations.createPost, {
            input:{
                title ,
                createdBy:"Mike",
                description,
                postBlogId:blog
            }
        }))

    }
    onSelectBlog(val){
        this.setState(prev =>({
            ...prev,
            blog:val
        }))
    }
    onTitleChange(val){
        this.setState(prev =>({
            ...prev,
            title:val
        }))
    }

    onDescriptionChange(val){
        this.setState(prev =>({
            ...prev,
            description:val
        }))
    }

    render (){
        const option = ["Divers", "Sport", "Politique", "Etudes"]
        return (
            <div>
                <Button handleClick={this.handleShowCreatePost} label={"Créer un Article"}/>
                <Modal containerClassName={"new-post-modal"} isModalOpen={this.state.show} backDrop={true} withClose={true}
                       closeFunc={this.close}>

                    <div className={"col-xs-12  title-container"}>
                        <div className={"col-xs-3 title"}>
                            {"Title : "}
                        </div>
                        <div className={"col-xs-9"}>
                            <input type={"text"} className={"input"} onChange={ e => this.onTitleChange(e.target.value)}/>
                        </div>
                    </div>
                    <div className={" col-xs-12 which-blog"}>
                        <div className={"col-xs-3 title"}>
                            {"Blog : "}
                        </div>
                        <div className={"col-xs-9"}>
                            <select className={"input"} onChange={e => this.onSelectBlog (e.target.value)}>
                                {option.map(el =><option key={el}>
                                        {el}
                                    </option>
                                )}
                            </select>
                        </div>

                    </div>
                    <div className={"col-xs-12 description-container"}>
                        <div className={"col-xs-3 title"}>
                            {"Description :"}
                        </div>
                        <div className={"col-xs-9"}>
                            <ReactQuill value={this.state.description}
                                        onChange={this.onDescriptionChange}
                            />

                        </div>
                    </div>
                    <div className={"col-xs-12 bottom-buttons"}>
                        <div className={"col-xs-3 col-xs-offset-9"}>
                            <Button classStyle={"add"} handleClick={this.doCreate} label={"Add"}/>
                            <Button classStyle={"cancel"} handleClick={this.close} label={"Cancel"}/>
                        </div>

                    </div>

                </Modal>
            </div>
        )
    }
}

export default NewPost

