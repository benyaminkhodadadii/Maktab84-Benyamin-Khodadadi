import React from 'react';
import {useForm} from "react-hook-form";
import Button from "../components/Button";
import styles from '../assests/styles/shadow.module.css'
import {INSTANCE} from "../api/constant/constantApi";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../store/Feacture/reducer/isAuth";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManagmentPanel from "./managmentPanel";
import {useNavigate} from "react-router-dom";

const AdminPanel = () => {
    const dispatch = useDispatch();
    const selectAuth = useSelector(state => state.data.token);
    const navigate = useNavigate()
    const handlerSubmit = (dataAdmin) => {
        INSTANCE.post("/auth/login", {
            username: dataAdmin.userName,
            password: dataAdmin.password
        })
            .then(data => {
                dispatch(auth(JSON.stringify(data.data)));
                localStorage.setItem('accessToken', data.data.accessToken)
            })
            .catch(() => toast.error(' نام کاربری یا رمز عبور اشتباه است', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }))
    }

    const {register, handleSubmit, formState: {errors}} = useForm();
    return (
        <>
            {!selectAuth && <div className={`${styles.shadowHeader} bg-white my-12 p-4 w-4/12 m-auto  `}>
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
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={true}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    {errors.userName && <span className={'text-[#F62343] text-right'}>نام کاربری اشتباه است</span>}
                    {errors.password && <span className={'text-[#F62343] text-right'}>رمز عبور اشتباه است</span>}
                    <div className='flex gap-4'>
                        <Button styleButton={'bg-[#3264C7] text-white rounded'}>ورود</Button>
                        <button onClick={()=>navigate('/register')} className='text-[#3264C7]'>ثبت نام کنید</button>
                    </div>
                </form>
            </div>}

            {
                selectAuth && <ManagmentPanel/>
            }

        </>

    )
        ;
};

export default AdminPanel;