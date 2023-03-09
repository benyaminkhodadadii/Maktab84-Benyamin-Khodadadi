import React, {useEffect, useState} from 'react';
import shadows from "../assests/styles/shadow.module.css";
import laptop from "../assests/SvgImage/solid laptop.svg"
import leftArrow from "../assests/SvgImage/solid angle-left.svg"
import {Link} from "react-router-dom";
import {BASE_URL, INSTANCE} from "../api/constant/constantApi";
import {toast, ToastContainer} from "react-toastify";
const ListCardCategory = () => {
    const [productsData, setProductsData] = useState([]);
   useEffect(()=>{
       INSTANCE.get('/products')
           .then(data => setProductsData(data.data))
           .catch(()=>toast.error('مشکل سمت سرور پیش آمده است', {
           position: "top-center",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "light",
       }))
   },[])

    return (
        <div>
            <div className={`bg-white rounded p-[20px] ${shadows.shadowHeader} mt-12`}>
                <div className='flex justify-between items-center py-4 border-b border-[#E6ECF8]'>
                    <div className='flex gap-2'>
                        <img src={laptop} alt=""/>
                        <h3 className='text-[#141C2D] font-bold'>کالاهای دیجیتال</h3>
                    </div>
                    <div className='flex gap-2'>
                        <Link to="/focusProduct" className='text-[#9DB5E4]'>دیدن محصولات بیشتر</Link>
                        <img src={leftArrow} className='mt-1' alt='leftArrow'/>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-[20px]'>
                    {productsData.filter(item => item.id>=4).map(data => (
                        <Link  key={data.id} to = "/allCategory">
                        <div  key={data.id}
                             className={'cursor-pointer col-span-4 md:col-span-4 lg:col-span-1  bg-[#F5F5FA] rounded my-[20px] p-[20px] flex items-center flex-col gap-4 '}>
                            <img className='w-[120px] h-[120px] m-auto' src={BASE_URL + data.image} alt=""/>
                            <p className='font-bold text-[#141C2D]'>{data.description}</p>
                            <div className='flex justify-between'>
                                <span className='text-[#AEC1E6]'>قیمت : </span>
                                <span className='text-[#3264C7] font-bold text-xl'> {data.price} <span
                                    className={'text-sm text-[#AEC1E6]'}>تومان</span></span>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
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
        </div>
    );
};

export default ListCardCategory;