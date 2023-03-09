import React, {useEffect, useState} from 'react';
import {INSTANCE} from "../api/constant/constantApi";
import styles from "../assests/styles/shadow.module.css";
import {toast, ToastContainer} from "react-toastify";
import {useForm} from "react-hook-form";

const EditProduct = () => {
    const {register, handleSubmit,} = useForm();
    const onSubmit =  data => {
        const formData = new FormData();
        formData.append('image',data.image[0])
        formData.append('name',data.name)
        formData.append('price',data.price)
        formData.append('category',data.category)
        formData.append('description',data.description)
        formData.append('quantity',0)
        INSTANCE.post('/products',formData)
            .then(e=>e)
            .catch(()=>toast.error('مشکل سمت سرور پیش آمده است!!!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }))
    };
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        INSTANCE.get('/products')
            .then(data=>setProducts(data.data))
    },[])
    console.log(products)

    return (
        <div>
            <div  className={` z-10 w-6/12 absolute `}>
               <div
                    className={`  flex  rounded p-4 bg-white ${styles.boxShadowAbs}`}>

                    <form   onSubmit={handleSubmit(onSubmit)} className='flex w-full flex-col gap-4'>
                        <input type="file" name="file" id="file" className='w-full bg-[#F0F0F5] outline-none rounded px-4 py-2'
                               accept="image/png, image/jpeg" {...register('image')}/>

                        <div  className='flex gap-4 items-start flex-col '>
                            <label htmlFor="name">نام کالا:</label>
                            <input id='name' className='w-full bg-[#F0F0F5] outline-none rounded px-4 py-2 '
                                   placeholder='نام کالای مد نظر را وارد کنید'
                                   {...register('name')}/>
                        </div>
                        <div  className='flex gap-4 items-start flex-col '>
                            <label htmlFor="name">قیمت کالا :</label>
                            <input id='name' className='w-full bg-[#F0F0F5] outline-none rounded px-4 py-2 '
                                   placeholder='قیمت را وارد کنید به تومان'
                                   {...register('price')}/>
                        </div>

                        <label htmlFor="category">دسته ی مورد نظر: </label>
                        <select name="category" id="category"
                                className='w-full bg-[#F0F0F5] outline-none rounded px-4 py-2' {...register('category')}>
                            <option value="noVal">انتخاب کنید</option>
                            <option value="Digital">دیجیتال</option>
                            <option value="Stationery">لوازم تحریر</option>
                            <option value="Clothes">لباس</option>
                        </select>

                        <textarea name="text" id="text" className='w-full bg-[#F0F0F5] outline-none rounded px-4 py-2'
                                  placeholder='توضیحات محصول'
                                  {...register('description')}>
                </textarea>
                        <button type={"submit"} className='bg-[#3264C7] p-2 rounded text-white'>ذخیره</button>
                    </form>

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
        </div>
    );
};

export default EditProduct;