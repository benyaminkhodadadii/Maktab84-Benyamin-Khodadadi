import React, {useState} from 'react';
import shadows from "../assests/styles/shadow.module.css";
import laptop from "../assests/SvgImage/solid laptop.svg"
import leftArrow from "../assests/SvgImage/solid angle-left.svg"
import axios from "axios";
import {Link} from "react-router-dom";
// import focusProduct from "../api/services/product/focusProduct";
const ListCardCategory = () => {
    const [productsData, setProductsData] = useState([]);
    axios.get('http://localhost:3002/products').then(data => setProductsData(data.data))

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
                        <img src={leftArrow} className='mt-1'/>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-[20px]'>
                    {productsData.map(data => (
                        <Link  key={data.id} to = "/allCategory">
                        <div  key={data.id}
                             className={'cursor-pointer col-span-4 md:col-span-4 lg:col-span-1  bg-[#F5F5FA] rounded my-[20px] p-[20px] flex items-center flex-col gap-4 '}>
                            <img src={data.image} className='' alt=""/>
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
        </div>
    );
};

export default ListCardCategory;