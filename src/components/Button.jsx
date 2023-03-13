import React from 'react';

const Button = (props) => {
    const {styleButton,onClick} = props


    return (
        <div>
            <button onClick={onClick} type='submit'
                className={`${styleButton} flex items-center gap-2 hover:text-white
                 py-2 px-6 rounded relative`}>
                {props.children}

            </button>

        </div>
    );
};

export default Button;