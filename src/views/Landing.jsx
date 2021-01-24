import React from 'react';
import ResponsiveModal from "react-responsive-modal";
import Magic from './Magic';
import { Link } from "react-router-dom";

const styles = {
    modal: {
        backgroundColor: "transparent",
        boxShadow: "none",
        display: "flex",
        overflow: "none",
        width: "100%",
        padding: "0",
        margin: "0",
        height: "100%",
        minWidth: "100%",
        justifyContent: "center"
    },
    overlay: {
        backgroundColor: "#000000",
        padding: 0
    }
    
};


const Landing = (props) => {

    const { setModalVisible, modalVisible } = props;


    return (
        <ResponsiveModal
            open={modalVisible}
            onClose={() => setModalVisible(false)}
            styles={styles}
            animationDuration={1000}
            focusTrapped={false}
            onOverlayClick={() => setModalVisible(false)}
            blockScroll={true}
        >
        <div className="h-100 row align-items-center">
            <div className="col text-center">
                <div className="row">
                    <div className="col">
                        <h1 className="name">Hi, I am Elonzo!</h1>
                        <Magic modalVisible={modalVisible}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="outer">
                            <div className="inner">
                                <label onClick={() => setModalVisible(false)}>EXIT</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </ResponsiveModal>
        );
}

export default Landing;
