import React, {useState} from 'react';
import shadowBadge from '../assests/styles/shadow.module.css'

const Button = (props) => {
    const {styleButton,onClick} = props
    const [counter,] = useState(false)
    return (
        <div>
            <button onClick={onClick} type='submit'
                className={`${styleButton} flex items-center gap-2 hover:text-white
                 py-2 px-6 rounded relative`}>
                {props.children}
                {counter && <div className={`rounded-full bg-[#F62343] 
            w-6 h-6 text-white font-bold flex items-center
             justify-center  ${shadowBadge.shadowRedBadge} absolute bottom-7 right-[-12px]`}>2</div>}
            </button>

        </div>
    );
};

export default Button;