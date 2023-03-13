import React from 'react';
import ErrorImage from '../assests/SvgImage/Group 4268.svg'
import shadows from "../assests/styles/shadow.module.css";
const ErrorUrl = () => {
    return (
        <div className={`bg-white rounded p-[20px] ${shadows.shadowHeader} mt-12`}>
            <img src={ErrorImage} alt=""/>
        </div>
    );
};

export default ErrorUrl;