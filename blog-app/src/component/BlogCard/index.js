import React, {Component} from 'react'
import './styles.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFutbol, faGraduationCap, faBullhorn, faCircleNotch} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";
import {API, graphqlOperation} from "aws-amplify";
import * as queries from "../../graphql/queries";


const icons = {
    Etudes: faGraduationCap,
    Sport: faFutbol,
    Divers: faCircleNotch,
    Politique: faBullhorn
};


class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            blog: null
        }

    }

    componentDidMount() {
        this.setState(prev => ({
            ...prev,
            isLoading: true,
        }));

    debugger
        const id = this.props.id;
        API.graphql(graphqlOperation(queries.getBlog, {id: id})
        ).then(blog => {
            if (blog.data.getBlog) {
                this.setState(prev => ({
                    ...prev,
                    isLoading: false,
                    blog: blog.data.getBlog
                }));
            }
        })
    }

    render() {
          const {blog} =this.state;
        // if(this.state.isLoading){
        //     return
        // }
        return (
            <div>
                {blog && <NavLink to={{
                    pathname: '/blog/' + blog.id,
                }}>
                    <li className={"blog-item card"}>
                        <div className={"left-contain"}>
                            <div className={"card-type"}> {blog.name}</div>
                            <div className={"posts-number"}>{blog.posts.items.length + " Article" + (blog.posts.items.length >1 ?"s":"")}</div>
                        </div>

                        <div className={"right-contain"}>
                            <div className={"blog-icon"}><FontAwesomeIcon icon={icons[blog.name]}/>
                            </div>
                        </div>

                        <div className={"author"}>
                            <span>{"Ecrit par "}<span className={"name"}>{"Mike"}</span></span>
                        </div>
                    </li>
                </NavLink>
                }
            </div>
        )
    }
}

export default Card