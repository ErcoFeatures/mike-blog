import React from 'react'
// import {faFutbol, faGraduationCap, faBullhorn, faCircleNotch} from '@fortawesome/free-solid-svg-icons'
import MyContext from "../../MyContext";
import Card from '../../component/BlogCard'


// const icons = {
//     Etudes: faGraduationCap,
//     Sport: faFutbol,
//     Divers: faCircleNotch,
//     Politique: faBullhorn
// };


export const ListBlog = (props) => {

    return (

        <MyContext.Consumer>
            {
                context =>
                    (
                        <ul className={"card-container "}>

                            {context.blogList.map(el =>
                                <Card key={el.id} {...el}/>
                            )
                            }
                        </ul>
                    )
            }
        </MyContext.Consumer>
    )
}