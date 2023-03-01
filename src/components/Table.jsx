import React, {useEffect, useState} from 'react';
import {BASE_URL, INSTANCE} from "../api/constant/constantApi";
import {Link} from "react-router-dom";

const Table = () => {
    const [productsData, setProductsData] = useState([]);
    useEffect(() => {
        INSTANCE.get('/products').then(data => setProductsData(data.data)).catch(Promise.reject)
    }, [])
    return (
            <table onClick={()=>console.log(productsData)} className="w-full text-right text-gray-500 ">
                <thead className="text-gray-700 text-xl ">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        تصویر
                    </th>
                    <th scope="col" className="px-6 py-3">
                        نام کالا
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                        دسته بندی ها
                    </th>
                    <th scope="col" className="px-6 py-3">
                        حذف یا ویرایش
                    </th>
                </tr>
                </thead>
                {productsData.map(data => (
                    <tbody key={data.id}>

                    <tr className=" border-t border-gray-200 ">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  ">
                            <img className='w-[120px] h-[120px]' src={BASE_URL + data.image} alt=""/>
                        </th>

                        <td className="px-6 py-4">
                            {data.name}
                        </td>
                        <td className="px-6 py-4  ">
                            {data.category}
                        </td>
                        <td className="px-6 py-4 ">
                            <div className='flex gap-2'>
                                <Link to={'/remove'}>ویرایش</Link>
                                <Link to={'/remove'}>حذف</Link>
                            </div>

                        </td>
                    </tr>
                    </tbody>
                ))}

            </table>
    );
};

export default Table;