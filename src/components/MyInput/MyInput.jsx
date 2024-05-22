import React from 'react';
import "./MyInput.css"
const MyInput = ({type, name, placeHolder, status}) => {
    return (
        <>
            <input
                className={{ status } != "disable" ? 'MyInput' : "disable"}
                type={type}
                placeholder={placeHolder}
                title={name}
            ></input >
        </>
    );
};

export default MyInput;