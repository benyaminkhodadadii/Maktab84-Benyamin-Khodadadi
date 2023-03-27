import React from 'react';
import shadows from "../assests/styles/shadow.module.css";
import Button from "../components/Button";
// import {useNavigate} from "react-router-dom";
import {INSTANCE} from "../api/constant/constantApi";

const PaymentCard = () => {
    // const navigate =useNavigate();
    const handleSubmit = ()=>{
        const str =JSON.parse( localStorage.getItem('client'));
        console.log(str)
        INSTANCE.post('/orders',{
            username:str[0].name,
            phone:str[0].phone,
            address:str[0].address,
            products:str[1]
        }).then(e=>console.log(e))
    }
    return (
        <div
              className={`bg-white w-6/12 m-auto rounded p-[20px] flex flex-col gap-8 ${shadows.shadowHeader} mt-12`}>
            <div className=' grid grid-cols-2 grid-rows-2  gap-8'>
                <div className='flex gap-4 items-start flex-col '>
                    <label htmlFor="name">شماره کارت</label>
                    <input type='number' className='bg-[#FAFAFC] outline-none py-2 px-4 rounded w-full'
                           placeholder='شماره کارت خود را وارد کنید'/>
                </div>
                <div className='flex gap-4 items-start flex-col '>
                    <label htmlFor="name">CVV2</label>
                    <input type='password' className='bg-[#FAFAFC] outline-none py-2 px-4 rounded w-full'
                           placeholder='CVV2'/>
                </div>
                <div className='flex gap-4 items-start flex-col '>
                    <label htmlFor="name">رمز دوم کارت</label>
                    <input type='password' className='bg-[#FAFAFC] outline-none py-2 px-4 rounded w-full'
                           placeholder='رمز دوم'/>
                </div>
                <div className='flex gap-4 items-start flex-col '>
                    <label htmlFor="name">reCapcha</label>
                    <input  className='bg-[#FAFAFC] outline-none py-2 px-4 rounded w-full'
                               placeholder='6Fa265'/>
                </div>


            </div>
            <div className='flex gap-4'>
                <Button onClick={handleSubmit} styleButton='bg-[#3264C7] p-4  text-white'>ادامه ی فرایند خرید</Button>
                <Button  styleButton='bg-[#FAE4E9] text-[#F6425E] p-4  text-white'>انصراف</Button>
            </div>

        </div>
    );
};

export default PaymentCard;