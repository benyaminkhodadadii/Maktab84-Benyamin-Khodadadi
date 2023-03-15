import React from 'react';
import shadows from "../assests/styles/shadow.module.css";
import {useForm} from "react-hook-form";
import Button from "../components/Button";
// import { ToastContainer, toast } from 'react-toastify';

const ClientLogin = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (<div className='flex justify-center  flex-col'>
        <h1 className='m-auto font-bold text-2xl mt-12 bg-[#E6ECF8] w-6/12 text-center p-4 text-[#3264C7]'>برای
            ادامه ی خرید باید ثبت نام کنید</h1>
        <form onSubmit={handleSubmit(onSubmit)}
              className={`bg-white w-6/12 m-auto rounded p-[20px] flex flex-col gap-8 ${shadows.shadowHeader} mt-12`}>
            <div className=' grid grid-cols-2 grid-rows-2  gap-8'>
                <div className='flex gap-4 items-start flex-col '>
                    <label htmlFor="name">نام شما :</label>
                    <input type='text' className='bg-[#FAFAFC] py-2 px-4 rounded w-full'  {...register('name')}
                           placeholder='نام خود را وارد کنید'/>
                </div>
                <div className='flex gap-4 items-start flex-col '>
                    <label htmlFor="name">نام خانودگی: </label>
                    <input type='text' className='bg-[#FAFAFC] py-2 px-4 rounded w-full'  {...register('family')}
                           placeholder='نام خانوادگی خود را وارد کنید'/>
                </div>
                <div className='flex gap-4 items-start flex-col '>
                    <label htmlFor="name">شماره تلفن همراه :</label>
                    <input type='text' className='bg-[#FAFAFC] py-2 px-4 rounded w-full'  {...register('phone')}
                           placeholder='تلفن همراه خود را وارد کنید'/>
                </div>
                <div className='flex gap-4 items-start flex-col '>
                    <label htmlFor="name">آدرس محل سکونت :</label>
                    <textarea  className='bg-[#FAFAFC] py-2 px-4 rounded w-full'  {...register('address')}
                               placeholder='آدرس محل سکونت را وارد کنید'></textarea>
                </div>


            </div>

            <Button styleButton='bg-[#3264C7] p-4 m-auto text-white'>ادامه ی فرایند خرید</Button>
        </form>
    </div>);
};

export default ClientLogin;