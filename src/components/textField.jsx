import React from 'react';

const TextField = (props) => {
    const {textLabel,idOfInput,typeStyle} = props
    return (
        <div className='flex gap-4 items-start flex-col '>
            <label htmlFor={idOfInput}>{textLabel}</label>
            <input type={typeStyle} id={idOfInput}  {...props}/>
        </div>
    );
};

export default TextField;