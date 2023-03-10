import React from 'react';

const ErrorHandler = () => {
    return (
        <div className='flex item-center justify-center rounded bg-[#FEE4E8] text-center w-full mt-12 text-[#F62343] gap-4 p-2'>
            <svg className='fill-[#F62343] mt-1' xmlns="http://www.w3.org/2000/svg" width="21.088" height="24.101" viewBox="0 0 21.088 24.101">
                <path id="solid_lock" data-name="solid lock" d="M18.829,10.544H17.7V7.155a7.155,7.155,0,1,0-14.31,0v3.389H2.259A2.26,2.26,0,0,0,0,12.8v9.038A2.26,2.26,0,0,0,2.259,24.1H18.829a2.26,2.26,0,0,0,2.259-2.259V12.8A2.26,2.26,0,0,0,18.829,10.544Zm-4.9,0H7.155V7.155a3.389,3.389,0,1,1,6.778,0Z"/>
            </svg>
            <h1 className='font-bold text-2xl'>ارور 401</h1>
        </div>
    );
};

export default ErrorHandler;