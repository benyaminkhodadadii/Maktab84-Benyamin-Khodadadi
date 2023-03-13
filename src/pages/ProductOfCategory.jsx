import React, {useEffect, useState} from 'react';
import shadows from "../assests/styles/shadow.module.css";
import {BASE_URL, INSTANCE} from "../api/constant/constantApi";
import RightFilter from "../components/RightFilter";
import {Link} from "react-router-dom";

const ProductOfCategory = ({category}) => {
    const [categoryProduct, setCategoryProduct] = useState([]);

    // const [digital,setDigital] = useState([])

    useEffect(() => {
        INSTANCE.get(`/products`).then(res => setCategoryProduct(res.data)).catch(e => console.log(e))
    }, [])

    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className={`col-span-1 bg-white rounded p-[20px] ${shadows.shadowHeader} mt-12`}>
            <RightFilter/>
            </div>
            <div className={`col-span-2 bg-white rounded p-[20px] ${shadows.shadowHeader} mt-12`}>
                <h1 className='text-xl py-4 font-bold border-b-2 mb-[20px]'>دسته بندی {category}</h1>
                <div className='grid grid-cols-2 gap-[20px]'>
                {categoryProduct.filter(item=>item.category===category).map(data=>(
                   <Link  key={data.id} to={`/${data.id}`}>
                       <div
                            className={'cursor-pointer  bg-[#F5F5FA] rounded p-[20px] flex items-center flex-col gap-4 '}>
                           <img className='w-[120px] h-[120px] m-auto' src={BASE_URL + data.image} alt=""/>
                           <p className='font-bold text-[#141C2D]'>{data.name}</p>
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
        </div>
    );
};

export default ProductOfCategory;