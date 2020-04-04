import React, {Component} from 'react'

import {withRouter} from 'react-router-dom'


class Header  extends Component{
    constructor(props){
        super(props)
        this.state={
            blogs:[]
        }

    }


    render(){
        return (
            <div className={"header-container"}>
                <div className={"blog-name"} onClick={ () => {this.props.history.goBack()}}> <i className="icon fa fa-long-arrow-left"></i></div>
                <div className={"contact-me"}><i className="icon fa fa-envelope"></i></div>
            </div>
        )
    }

}


export default withRouter(Header)