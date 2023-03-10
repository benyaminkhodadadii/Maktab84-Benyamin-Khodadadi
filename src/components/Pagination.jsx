import React from 'react';
import styles from '../assests/styles/shadow.module.css'
const Pagination = ({postsPerPage,totalPosts,paginate}) => {
    const pageNumber = [];
    for (let i =1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumber.push(i)
    }
    return (

            <div className={`flex cursor-pointer w-full justify-center rounded mt-[20px] items-center p-4 gap-4 m-auto bg-white ${styles.boxShadow}`}>
            {pageNumber.map(number=>(
                  <div key={number} onClick={()=>paginate(number)} className='w-[48px] h-[48px] bg-[#F6F4F4] text-[#3264C7]
                  hover:bg-[#3264C7] hover:text-white
                   flex items-center justify-center rounded'>{number}</div>
            ))}
            </div>

    );
};

export default Pagination;