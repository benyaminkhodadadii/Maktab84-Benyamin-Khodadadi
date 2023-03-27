import React from 'react';
import {Link} from "react-router-dom";
import Button from "../components/Button";
import {auth} from "../store/Feacture/reducer/isAuth";
import {useDispatch} from "react-redux";

const AdminHeader = () => {
    const dispatch = useDispatch(state => state.data.token)
    return (
        <div className='flex items-center justify-between w-full'>
            <h1 className='text-3xl font-bold'> پنل مدیریت فروشگاه خونه </h1>
            <div className='flex gap-4 items-center '>

            </div>
            <Link to={'/'}>
                <div className='flex gap-4'>
                    <Link to={'/adminPanel'}>
                        <Button
                            styleButton={'text-[#20262E] bg-[#E4E4E5] hover:bg-[#20262E] hover:text-white'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16"
                                 viewBox="0 0 14 16">
                                <path className='fill-current' id="solid_user-tie"
                                      data-name="solid user-tie"
                                      d="M7,8A4,4,0,1,0,3,4,4,4,0,0,0,7,8ZM9.994,9.019,8.5,15l-1-4.25L8.5,9h-3l1,1.75L5.5,15,4.006,9.019A4.193,4.193,0,0,0,0,13.2v1.3A1.5,1.5,0,0,0,1.5,16h11A1.5,1.5,0,0,0,14,14.5V13.2A4.193,4.193,0,0,0,9.994,9.019Z"
                                      fill="#20262e"/>
                            </svg>
                            پنل مدیریت</Button>
                    </Link>
                    <Button onClick={() => dispatch(auth(''))}
                            styleButton={'text-[#F62343] bg-[#FFD9DF] hover:bg-[#F62343] hover:text-white'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16"
                             viewBox="0 0 14 16">
                            <path className='fill-current' id="solid_user-tie"
                                  data-name="solid user-tie"
                                  d="M7,8A4,4,0,1,0,3,4,4,4,0,0,0,7,8ZM9.994,9.019,8.5,15l-1-4.25L8.5,9h-3l1,1.75L5.5,15,4.006,9.019A4.193,4.193,0,0,0,0,13.2v1.3A1.5,1.5,0,0,0,1.5,16h11A1.5,1.5,0,0,0,14,14.5V13.2A4.193,4.193,0,0,0,9.994,9.019Z"
                                  fill="#20262e"/>
                        </svg>
                        خروج</Button>


                </div>
            </Link>
        </div>
    );
};

export default AdminHeader;