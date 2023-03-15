import React, {useEffect, useState} from 'react';
import {INSTANCE} from "../api/constant/constantApi";
import {Link} from "react-router-dom";
import Icons from "./Icons";
const RightFilter = () => {
    const [category,setCategory] = useState([]);
    useEffect(()=>{
        INSTANCE.get('/category').then(res=>setCategory(res.data)).catch(e=>console.log(e))
    },[])
    return (
        <>
            <div className='flex gap-2 items-center py-4 border-b-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path id="solid_filter" data-name="solid filter"
                          d="M15.249,0H.751a.751.751,0,0,0-.53,1.28L6,7.061V13.5a.75.75,0,0,0,.32.614l2.5,1.749A.75.75,0,0,0,10,15.249V7.061l5.78-5.78A.751.751,0,0,0,15.249,0Z"
                          transform="translate(0)" fill="#3264c7"/>
                </svg>
                <h2>دسته بندی ها</h2>
            </div>
            <div className='flex flex-col gap-2 pt-4'>
                {category.map(data=>(
                    <div key={data.id} className=' py-2'>

                       <Link to={`/${data.name}`}> <Icons  text={data.name}><img src={data.icon} className='w-5 h-5' alt=""/></Icons></Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default RightFilter;