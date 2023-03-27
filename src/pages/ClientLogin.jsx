import React from 'react';
import shadows from "../assests/styles/shadow.module.css";
import {useForm} from "react-hook-form";
import Button from "../components/Button";
// import { ToastContainer, toast } from 'react-toastify';
import {useNavigate} from "react-router-dom";

const ClientLogin = ({h1Text}) => {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate()
    const handlerSubmit = (user) => {
        let client = JSON.parse(localStorage.getItem('client'))||[];
        // let orderClient = JSON.parse(localStorage.getItem('orders'))||[];
        client.push(user,JSON.parse(localStorage.getItem('orders')))
        // client.concat(orderClient)
        localStorage.setItem('client',JSON.stringify(client))
        navigate('/paymentCard');
    }
    return (<div className='flex justify-center  flex-col'>
        <h1 className='m-auto font-bold text-2xl mt-12 bg-[#E6ECF8] w-6/12 text-center p-4 text-[#3264C7]'>
            {h1Text}</h1>
        <form onSubmit={handleSubmit(handlerSubmit)}
              className={`bg-white w-6/12 m-auto rounded p-[20px] flex flex-col gap-8 ${shadows.shadowHeader} mt-12`}>
            <div className=' grid grid-cols-2 grid-rows-2  gap-8'>
                <div className='flex gap-4 items-start flex-col '>
                    <label htmlFor="name">نام شما :</label>
                    <input type='text' className='bg-[#FAFAFC] outline-none py-2 px-4 rounded w-full'  {...register('name')}
                           placeholder='نام خود را وارد کنید'/>
                </div>
                <div className='flex gap-4 items-start flex-col '>
                    <label htmlFor="name">نام خانودگی: </label>
                    <input type='text' className='bg-[#FAFAFC] outline-none py-2 px-4 rounded w-full'  {...register('family')}
                           placeholder='نام خانوادگی خود را وارد کنید'/>
                </div>
                <div className='flex gap-4 items-start flex-col '>
                    <label htmlFor="name">شماره تلفن همراه :</label>
                    <input type='text' className='bg-[#FAFAFC] outline-none py-2 px-4 rounded w-full'  {...register('phone')}
                           placeholder='تلفن همراه خود را وارد کنید'/>
                </div>
                <div className='flex gap-4 items-start flex-col '>
                    <label htmlFor="name">آدرس محل سکونت :</label>
                    <textarea  className='bg-[#FAFAFC] outline-none py-2 px-4 rounded w-full'  {...register('address')}
                               placeholder='آدرس محل سکونت را وارد کنید'></textarea>
                </div>


            </div>

            <Button styleButton='bg-[#3264C7] p-4 m-auto text-white'>ادامه ی فرایند خرید</Button>
        </form>
        {/*<ToastContainer*/}
        {/*    position="top-center"*/}
        {/*    autoClose={5000}*/}
        {/*    hideProgressBar={false}*/}
        {/*    newestOnTop={false}*/}
        {/*    closeOnClick*/}
        {/*    rtl={true}*/}
        {/*    pauseOnFocusLoss*/}
        {/*    draggable*/}
        {/*    pauseOnHover*/}
        {/*    theme="light"*/}
        {/*/>*/}
    </div>);
};

export default ClientLogin;