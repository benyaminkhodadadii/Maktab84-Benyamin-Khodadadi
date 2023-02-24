import React, {useState} from 'react';

const Icons = (props) => {
    const {isBg, text} = props;
    const [hoverState, setHoverState] = useState(false)

    return (
        <div onMouseOver={() => setHoverState(true)} onMouseLeave={() => setHoverState(false)}
             className={' py-4   border-b border-b-transparent hover:border-b-blue-400 '}>
            {hoverState && (<div className='flex items-center gap-2'>
                <div className={`rounded mt-1 flex-1`}>{props.children}</div>
                <p className={'font-bold'}>{text}</p>
            </div>)}
            {!hoverState && (<div className='flex items-center gap-2'>
                <div className={` ${isBg} rounded mt-1 `}>{props.children}</div>
                <p>{text}</p>
            </div>)}

        </div>
    );
};

export default Icons;