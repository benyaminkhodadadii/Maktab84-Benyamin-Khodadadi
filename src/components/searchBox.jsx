import React, {useState} from 'react';

const SearchBox = ({selectState,setSelectState}) => {
    const [btnChange, setBtnChange] = useState(false)
    return (
        <div className='flex items-center justify-between '>
            <input onFocus={() => setBtnChange(true)} onBlur={() => setBtnChange(false)}
                   type="search" name="search" id="search"
                   className='bg-[#F0F0F5] outline-none   w-full p-4 h-[40px] rounded-r'
                   placeholder='جستجو ی محصولات'
                   value={selectState}
                    onChange={(e)=>setSelectState(e.target.value)}/>
            {!btnChange && <div
                className=' px-4 h-[40px] flex items-center justify-center rounded-l bg-[#3264C7]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16.003"
                     viewBox="0 0 16 16.003">
                    <path id="solid_search" data-name="solid search"
                          d="M15.782,13.835,12.667,10.72a.75.75,0,0,0-.531-.219h-.509A6.5,6.5,0,1,0,10.5,11.626v.509a.749.749,0,0,0,.219.531l3.116,3.116a.747.747,0,0,0,1.059,0l.884-.884A.754.754,0,0,0,15.782,13.835ZM6.5,10.5a4,4,0,1,1,4-4A4,4,0,0,1,6.5,10.5Z"
                          fill="#fff"/>
                </svg>
            </div>}
            {btnChange && <div
                className=' px-4 h-[40px] flex items-center justify-center rounded-l bg-[#3CCF4E]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16.003"
                     viewBox="0 0 16 16.003">
                    <path id="solid_search" data-name="solid search"
                          d="M15.782,13.835,12.667,10.72a.75.75,0,0,0-.531-.219h-.509A6.5,6.5,0,1,0,10.5,11.626v.509a.749.749,0,0,0,.219.531l3.116,3.116a.747.747,0,0,0,1.059,0l.884-.884A.754.754,0,0,0,15.782,13.835ZM6.5,10.5a4,4,0,1,1,4-4A4,4,0,0,1,6.5,10.5Z"
                          fill="#fff"/>
                </svg>
            </div>}
        </div>
    );
};

export default SearchBox;