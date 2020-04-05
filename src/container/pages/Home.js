import React, {Component} from 'react'
import {ListBlog} from "../listBlog";
import Header from "../layout/header";
import {AddPostButton} from "../../component/AddPostCTAButton";

class Home extends Component {

    onLikeClick() {

    }

    onDislikeClick() {

    }

    render() {
        return (
            <div>
                <AddPostButton/>
            <div className={"list-blog"}>
                {
                    <ListBlog {...this.state}/>
                }
            </div>
            </div>
        )
    }

}


export default Home