import React, {Component} from 'react'



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
                <div className={"blog-name"}>{"Sport blog"}</div>
                <div className={"contact-me"}><i className="fa fa-envelope"></i></div>
            </div>
        )
    }

}


export default Header