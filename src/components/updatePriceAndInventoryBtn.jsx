import React from 'react';
import Button from "../components/Button";

const UpdatePriceAndInventoryBtn = ({children, h1Tag}) => {


    return (
        <div className='flex justify-between my-12 items-center relative m-auto'>
            <h1 className='text-2xl font-bold'>{h1Tag}</h1>
            <Button
                styleButton={'bg-[#3264C7]  rounded px-8 py-2 text-white'}>{children}</Button>
        </div>
    )
};

export default UpdatePriceAndInventoryBtn;