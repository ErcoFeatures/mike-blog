import React from 'react'
import {Button} from "../Button";
import {NavLink} from "react-router-dom";

export const AddPostButton = (props) => {

    return (
        <NavLink to ={{
            pathname:  '/new/',
        }}>
        <Button  label={"Créer un Article"}/>
        </NavLink>
    )
}

