import Modal from "../Modal";
import Editor from "../Editor";
import {Button} from "../Button";
import React from "react";
import './styles.css'

export const AddPostModal = (props) => {

    return (
        <Modal containerClassName={"new-post-modal"} isModalOpen={props.show}  backDrop={true} withClose={true}
               closeFunc={props.close}>

                <div className={"col-xs-12  title-container"}>
                    <div className={"col-xs-3 title"}>
                        {"Title : "}
                    </div>
                    <div className={"col-xs-9"}>
                        <input type={"text"} className={"input"}/>
                    </div>
                </div>
                <div className={"col-xs-12 description-container"}>
                    <div className={"col-xs-3 description"}>
                        {"Description :"}
                    </div>
                    <div className={"col-xs-9"}>
                             <Editor/>

                    </div>
                </div>
                <div className={"col-xs-12 bottom-buttons"}>
                    <div className={"col-xs-3 col-xs-offset-9"}>
                        <Button classStyle={"add"} handleClick={props.doCreate} label={"Add"}/>
                        <Button classStyle={"cancel"} handleClick={props.close} label={"Cancel"}/>
                    </div>

                </div>

        </Modal>
    )
}