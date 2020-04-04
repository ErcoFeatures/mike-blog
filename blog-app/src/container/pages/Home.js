import React, {Component} from 'react'
import {ListBlog} from "../listBlog";

class Home extends Component {

    onLikeClick() {

    }

    onDislikeClick() {

    }

    render() {
        return (
            <div className={"list-blog"}>
                {
                    <ListBlog {...this.state}/>
                }
            </div>
        )
    }

}


export default Home