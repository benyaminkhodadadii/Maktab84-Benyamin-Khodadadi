import React from 'react';
import {useForm} from "react-hook-form";
import Button from "../components/Button";
import styles from '../assests/styles/shadow.module.css'
import {INSTANCE} from "../api/constant/constantApi";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../store/Feacture/reducer/isAuth";
import ManagmentPanel from "./managmentPanel";
import {Outlet} from "react-router-dom";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminPanel = () => {
    const dispatch = useDispatch();
    const selectAuth = useSelector(state=>state.data.token)
    const handlerSubmit = (dataAdmin) => {
        INSTANCE.post("/auth/login", {
            username: dataAdmin.userName,
            password: dataAdmin.password
        })
            .then(data => {
                dispatch(auth(JSON.stringify(data.data)))
            })
            .catch(() => toast("401 Error"))
    }

    const {register, handleSubmit, formState: {errors}} = useForm();
    return (
        <>
            {!selectAuth &&  <div className={`${styles.shadowHeader} bg-white my-12 p-4 w-max m-auto w-full flex `}>

                <form onSubmit={handleSubmit(handlerSubmit)} className='flex flex-col gap-4 '>
                    <label htmlFor="adminUser">نام کاربری را وارد کنید : </label>
                    <input id='adminUser' placeholder='نام کاربری ' type="text"
                           className={'bg-[#F2F2F7] border-r-2 border-transparent' +
                               ' hover:border-[#3157A1] outline-none text-zinc-700 py-2 px-4 rounded'} {...register('userName', {
                        // required:true,
                        // pattern : /^admin$/g
                    })}/>

                    <label htmlFor="passwordUser">رمز عبور را وارد کنید :</label>
                    <input id='passwordUser' placeholder='نام کاربری ' type="password"
                           className={'bg-[#F2F2F7] border-r-2 border-transparent' +
                               ' hover:border-[#3157A1] outline-none text-zinc-700 py-2 px-4 rounded'} {...register('password', {
                        // required:true,
                        // pattern : /^admin$/g
                    })}/>
                    {errors.userName && <span className={'text-[#F62343] text-right'}>نام کاربری اشتباه است</span>}
                    {errors.password && <span className={'text-[#F62343] text-right'}>رمز عبور اشتباه است</span>}
                    <Button styleButton={'bg-[#3264C7] text-white rounded'}>ورود</Button>


                </form>
            </div>}
            {selectAuth && <ManagmentPanel/>}
            <Outlet/>
        </>

    );
};

export default AdminPanel;