import React, {Component} from 'react'
import './styles.css'
class Profile extends Component{

    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className={"user-profile-container"}>
                <div className={"photo"}>
                    <i className="fa fa-user-circle"/>
                </div>
                <div className={"name"}>{"Mike Sene"}</div>
                <div className={"function"}>{"Expert en droit Penal"}</div>
                <ul className={"social-media-list"}>
                    <li><i className="fa fa-facebook"/></li>
                    <li><i className="fa fa-twitter"/></li>
                    <li><i className="fa fa-instagram"/></li>
                    <li><i className="fa fa-linkedin-square"/></li>
                </ul>
            </div>
        )
    }

}

export default Profile