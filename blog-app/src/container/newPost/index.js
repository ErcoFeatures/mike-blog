import React, {Component} from 'react'
import * as queries from '../../graphql/queries'
import * as mutations from '../../graphql/mutations'
import {API, graphqlOperation} from "aws-amplify";
import Modal from "../../component/Modal";
import {Button} from "../../component/Button";
import ReactQuill from "react-quill";
import './styles.css'
import MyContext from "../../MyContext";

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            blog: null,
            inputError: null
        };
        this.handleShowCreatePost = this.handleShowCreatePost.bind(this);
        this.doCreate = this.doCreate.bind(this);
        this.clear = this.clear.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onSelectBlog = this.onSelectBlog.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
    }

    handleShowCreatePost() {
        this.setState(prev => ({
            ...prev,
            title: "",
            description: "",
            inputError: false
        }))
    }

    clear() {
        this.setState(prev => ({
            ...prev,
            title: "",
            description: "",
            inputError: false,
        }))

    }


    doCreate() {

        console.log("here");
        let {title, description, blog} = this.state;
        let currentDate = new Date();
        const ISODate = currentDate.toISOString()
        this.setState({
            inputError: title === "" || description === "" || blog === null
        }, () => {
            if (!this.state.inputError)
                API.graphql(graphqlOperation(mutations.createPost, {
                    input: {
                        title,
                        createdBy: "Mike",
                        createdAt: ISODate,
                        description,
                        postBlogId: blog.id,

                    }
                }))
        })
    }

    onSelectBlog(blog) {
        this.setState(prev => ({
            ...prev,
            blog: blog
        }))
    }

    onTitleChange(val) {
        this.setState(prev => ({
            ...prev,
            title: val
        }))
    }

    onDescriptionChange(val) {
        this.setState(prev => ({
            ...prev,
            description: val
        }))
    }

    render() {
        const option = ["Divers", "Sport", "Politique", "Etudes"];
        return (
            <MyContext.Consumer>

                {
                    context => (
                        <div className={"new-post-container"}>

                            {this.state.inputError && <div className={"col-xs-12  error"}>
                                <span>{"Fill all mandatory fields"}</span>
                            </div>
                            }
                            <div className={"col-xs-12  no-padding title-container"}>
                                <div className={"col-xs-3  no-padding title"}>
                                    {"Title : *"}
                                </div>
                                <div className={"col-xs-9 no-padding"}>
                                    <input type={"text"} value={this.state.title} className={"input"}
                                           onChange={e => this.onTitleChange(e.target.value)}/>
                                </div>
                            </div>
                            <div className={" col-xs-12 no-padding which-blog"}>
                                <div className={"col-xs-3  no-padding title"}>
                                    {"Blog : *"}
                                </div>
                                <div className={"col-xs-9 no-padding"}>
                                    <select className={"input"} onChange={e => this.onSelectBlog( context.getBlogByName(e.target.value))}>
                                        <option value="" disabled selected>Select a blog</option>
                                        {option.map(el => <option key={el}>
                                                {el}
                                            </option>
                                        )}
                                    </select>
                                </div>

                            </div>
                            <div className={"col-xs-12  no-padding description-container"}>
                                <div className={"col-xs-3 no-padding title"}>
                                    {"Description : *"}
                                </div>
                                <div className={"col-xs-9 no-padding"}>
                                    <ReactQuill value={this.state.description}
                                                onChange={this.onDescriptionChange}
                                    />

                                </div>
                            </div>
                            <div className={"col-xs-12  no-padding  bottom-buttons"}>
                                <div className={"col-xs-3  no-padding col-xs-offset-9"}>
                                    <Button classStyle={"add"} handleClick={this.doCreate} label={"Add"}/>
                                    <Button classStyle={"cancel"} handleClick={this.clear} label={"Clear"}/>
                                </div>

                            </div>

                        </div>
                    )

                }

            </MyContext.Consumer>
        )
    }
}

export default NewPost

