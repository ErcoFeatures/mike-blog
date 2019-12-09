import React, {Component} from 'react'
import Politics from "../pages/Politics";
import Profile from "../../component/Profile";
import {NavLink} from 'react-router-dom'
class LeftContent extends Component{

    constructor(props){
        super(props)

    }

    render(){
        const links= [
            {name:"Home", path:"/"},
            {name:"Sport", path:"sport"},
            {name:"Politics", path:"politics"},
            {name:"Study", path:"study"},
            {name:"Various", path:"various"}
        ]
        return(
            <div>
                <Profile/>
                <ul className={"menu"}>
                        {
                            links.map(el => <div className={"menu-item"} key={el.path}><NavLink activeClassName={"active"}
                                to={{
                                    pathname: el.path,
                                }}> {el.name}</NavLink></div>
                            )

                        }
                </ul>
            </div>
        )
    }

}

export default LeftContent