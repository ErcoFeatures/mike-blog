import React from 'react'
import './styles.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFutbol, faGraduationCap, faBullhorn, faCircleNotch} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";


const icons = {
    Etudes: faGraduationCap,
    Sport: faFutbol,
    Divers: faCircleNotch,
    Politique: faBullhorn
};


export const Card = (props) => {

    return (
        <ul className={"card-container "}>

            {props.listBlog.map(el =>
                <NavLink to ={{
                    pathname:  '/blog/' + el.id ,
                }}>
                <li className={"blog-item card"}>
                    <div className={"left-contain"}>
                        <div className={"card-type"}> {el.name}</div>
                        <div className={"posts-number"}>{" 0 posts"}</div>
                    </div>

                    <div className={"right-contain"}>
                        <div className={"blog-icon"}><FontAwesomeIcon icon={icons[el.name]}/></div>
                    </div>

                    <div className={"author"}>
                        <span>{"Ecrit par "}<span className={"name"}>{"Mike"}</span></span>
                    </div>
                </li>
                </NavLink>
            )

            }

        </ul>
    )
}