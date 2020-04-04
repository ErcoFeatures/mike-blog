import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFutbol, faGraduationCap, faBullhorn, faCircleNotch} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";
import MyContext from "../../MyContext";
import Card from '../../component/BlogCard'


const icons = {
    Etudes: faGraduationCap,
    Sport: faFutbol,
    Divers: faCircleNotch,
    Politique: faBullhorn
};


export const ListBlog = (props) => {

    return (

        <MyContext.Consumer>
            {
                context =>
                    (
                        <ul className={"card-container "}>

                            {context.blogList.map(el =>
                                <Card {...el}/>
                            )
                            }
                        </ul>
                    )
            }
        </MyContext.Consumer>
    )
}