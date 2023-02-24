import React from 'react';
import TextField from "../components/textField";
import styles from '../assests/styles/shadow.module.css'

// textLabel,idOfInput,typeStyle
const AddProduct = () => {
    const handleSubmit = (data)=>{
        console.log(data)
    }
    return (
        <div className={` z-10 w-6/12 flex h-max absolute mt-36 mr-[300px] rounded p-4 bg-white ${styles.boxShadowAbs}`}>
            <form onSubmit={handleSubmit} className='flex w-full flex-col gap-4'>
                <TextField textLabel={'تصویر کالا :'} typeStyle={'text'} className='w-full bg-[#F0F0F5] outline-none rounded px-4 py-2 ' placeHolder='تصویر را به کد تبدیل کنید بعد وارد کنید'/>
                <TextField textLabel={'نام کالا :'} typeStyle={'text'} className='w-full bg-[#F0F0F5] outline-none rounded px-4 py-2 ' placeHolder='نام کالای مد نظر را وارد کنید'/>
                <label htmlFor="category">دسته ی مورد نظر: </label>
                <select name="category" id="category" className='w-full bg-[#F0F0F5] outline-none rounded px-4 py-2'>
                    <option value="noVal">انتخاب کنید</option>
                    <option value="Digital">دیجیتال</option>
                    <option value="Stationery">لوازم تحریر</option>
                    <option value="Clothes">لباس</option>
                </select>
                <textarea name="text" id="text" className='w-full bg-[#F0F0F5] outline-none rounded px-4 py-2' placeholder='توضیحات محصول'>

                </textarea>
                <button type={"submit"} className='bg-[#3264C7] p-2 rounded text-white'>ذخیره</button>
            </form>
        </div>
    );
};

export default AddProduct;