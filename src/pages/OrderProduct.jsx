import React, {useState} from 'react';
import styles from '../assests/styles/shadow.module.css'
import Button from "../components/Button";
import axios from "axios";
import AddProduct from "../layout/addProduct";
// import AddProduct from "../layout/addProduct";
const OrderProduct = () => {
    const [productsData, setProductsData] = useState([]);
    const [stateAbs,setStateAbs]=useState(false)
    axios.get('http://localhost:3002/products').then(data => setProductsData(data.data))
    return (
        <>
                <>
                    <div className='flex justify-between mt-12 items-center relative m-auto'>
                        <h1 className='text-2xl font-bold'>افزودن کالا</h1>
                        <Button onClick={()=>setStateAbs(true)} styleButton={'bg-[#3264C7]  rounded px-8 py-2 text-white'}>افزودن کالا</Button>
                        {stateAbs && <AddProduct/>}
                    </div>
                    <div className={`relative overflow-x-auto ${styles.boxShadow} bg-white p-2 mt-12  sm:rounded-lg`}>

                        <table className="w-full text-right text-gray-500 ">
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
                            {productsData.map(data=>(
                            <tbody key={data.id}>

                            <tr className="border-b border-gray-200 ">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  ">
                                    <img src={data.image} alt=""/>
                                </th>
                                <td className="px-6 py-4">
                                    {data.brand}
                                </td>
                                <td className="px-6 py-4  ">
                                    {data.category}
                                </td>
                                <td className="px-6 py-4 ">
                                     {data.price} تومان
                                </td>
                            </tr>
                            </tbody>
                            ))}
                        </table>
                    </div>

                </>


        </>
    );
};

export default OrderProduct;