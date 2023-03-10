import React, {useEffect, useState} from 'react';
import {BASE_URL, INSTANCE} from "../api/constant/constantApi";
import SearchBox from "./searchBox";
import UpdateProduct from "../layout/updateProduct";
import Select from 'react-select'

const Table = ({loading, posts, setPosts}) => {
    const options = [
        {value: 'Digital', label: 'دیجیتال'},
        {value: 'Stationery', label: 'لوازم تحریر'},
        {value: 'Clothes', label: 'لباس ها'}
    ]
    const [selectState, setSelectState] = useState('');
    const [isData, setIsData] = useState({
        isShow: false,
        id: null,
    });
    if (loading)
        return <h1>Loading.....</h1>
    useEffect(() => {
        INSTANCE.get('/products').then((res) => setPosts(res.data));
    }, [])

    return (
        <div className='w-full flex flex-col gap-8'>
            {isData.isShow && <UpdateProduct {...posts.find(item => item.id === isData.id)} />}
            <div className={`flex justify-between items-center  rounded p-4 gap-2 bg-white  `}>
                <div className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24.102 24.102">
                        <path className='fill-[#20262E]' id="solid_filter" data-name="solid filter"
                              d="M22.971,0H1.131a1.131,1.131,0,0,0-.8,1.929l8.706,8.707v9.7a1.13,1.13,0,0,0,.482.926L13.286,23.9a1.13,1.13,0,0,0,1.778-.926V10.636L23.77,1.929A1.131,1.131,0,0,0,22.971,0Z"
                              transform="translate(0)"/>
                    </svg>
                    <h2 className='text-[#20262E]  font-bold text-xl'>فیلتر محصولات</h2>
                </div>
                <SearchBox selectState={selectState} setSelectState={setSelectState}/>
                <div className=' flex items-center gap-2'>
                    <label className='font-medium text-[#20262E] ' htmlFor="searchOption">جستجو بر اساس :</label>
                    <Select placeholder='جستجو بر اساس : ' className='bg-transparent  p-2 px-4 rounded'
                            options={options}/>
                </div>
            </div>

            <table className="w-full text-right text-gray-500 relative ">
                <thead className="text-gray-700 text-xl ">
                <tr>
                    <th scope="col" className="px-6 py-3 text-center">
                        تصویر
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        نام کالا
                    </th>
                    <th scope="col" className="px-6 py-3 text-center ">
                        دسته بندی ها
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        حذف یا ویرایش
                    </th>
                </tr>
                </thead>
                {posts.length === 0 ? '' : posts.filter((item) => {
                    return selectState.toLowerCase() === '' ? item : item.name.toLowerCase().includes(selectState)
                }).map(data => (
                    <tbody key={data.id}>
                    <tr className=" border-t border-gray-200 text-center">
                        <td scope="row "
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  ">
                            <img className='w-[120px] h-[120px] m-auto' src={BASE_URL + data.image} alt=""/>
                        </td>
                        <td className="px-6 py-4 text-center">
                            {data.name}
                        </td>
                        <td className="px-6 py-4 text-center ">
                            {data.category}
                        </td>
                        <td className="px-6 py-4 ">
                            <div className='flex gap-2 justify-center'>
                                <button onClick={() => {
                                    setIsData({
                                        isShow: true,
                                        id: data.id
                                    })
                                }} className='cursor-pointer relative underline text-[#3264C7]'>
                                    ویرایش

                                </button>
                                <button onClick={() => {
                                    INSTANCE.delete(`/products/${data.id}`, {
                                        headers: {
                                            token: localStorage.getItem('accessToken')
                                        }
                                    }).then(() => INSTANCE.get('/products').then((res) => setPosts(res.data)))
                                }} className='cursor-pointer underline text-[#3264C7]'>حذف
                                </button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                ))}
            </table>
        </div>

    );
};

export default Table;