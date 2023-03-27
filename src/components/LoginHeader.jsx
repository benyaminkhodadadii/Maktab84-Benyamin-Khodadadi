import React from 'react';
import {Link} from "react-router-dom";
import Button from "./Button";

const LoginHeader = () => {
    return (
        <div>
            <Link to={'/login'}>
                <Button styleButton={'text-[#20262E] bg-[#E4E4E5] hover:bg-[#20262E]'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16"
                         viewBox="0 0 14 16">
                        <path className='fill-current' id="solid_user-tie"
                              data-name="solid user-tie"
                              d="M7,8A4,4,0,1,0,3,4,4,4,0,0,0,7,8ZM9.994,9.019,8.5,15l-1-4.25L8.5,9h-3l1,1.75L5.5,15,4.006,9.019A4.193,4.193,0,0,0,0,13.2v1.3A1.5,1.5,0,0,0,1.5,16h11A1.5,1.5,0,0,0,14,14.5V13.2A4.193,4.193,0,0,0,9.994,9.019Z"
                              fill="#20262e"/>
                    </svg>
                    پروفایل کاربری</Button>

            </Link>
        </div>
    );
};

export default LoginHeader;