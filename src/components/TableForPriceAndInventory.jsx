import React from 'react'
import Button from "./Button";
import {INSTANCE} from "../api/constant/constantApi";

const TableForPriceAndInventory = ({posts, loading}) => {
    if (loading)
        return <h1>Loading.....</h1>
    return (
        <>
            <div className='flex justify-between my-12 items-center relative m-auto'>
                <h1 className='text-2xl font-bold mr-4'>افزودن کالا</h1>
                <Button

                    styleButton={'bg-[#3264C7] ml-4  rounded px-8 py-2 text-white'}>ذخیره</Button>
            </div>
            <div className='w-full flex flex-col gap-8'>
                <div className={`flex justify-between items-center  rounded p-4 gap-2 bg-white  `}>
                    <div className='flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 27.114 20.479">
                            <path id="solid_dolly" data-name="solid dolly"
                                  d="M13.848,11.108a7.4,7.4,0,0,1,2.33.988l7.6-2.152a.622.622,0,0,0,.475-.808L21.412,1.888a.788.788,0,0,0-.951-.4L17.586,2.3l1.558,3.976-2.857.8L14.728,3.1l-2.9.82a.622.622,0,0,0-.475.808Zm13.227,1.948-.48-1.216a.788.788,0,0,0-.951-.4l-10.05,2.848a4.8,4.8,0,0,0-3.46-1.48L7.456.876A1.509,1.509,0,0,0,6.025,0H.753A.706.706,0,0,0,0,.64V1.92a.706.706,0,0,0,.753.64H4.938l4.34,11.068a3.563,3.563,0,0,0-1.695,3.62,4.229,4.229,0,0,0,3.639,3.168c2.834.428,5.286-1.392,5.338-3.7L26.6,13.864A.624.624,0,0,0,27.075,13.056ZM12.05,18.56a2.111,2.111,0,0,1-2.259-1.92,2.111,2.111,0,0,1,2.259-1.92,2.111,2.111,0,0,1,2.259,1.92A2.111,2.111,0,0,1,12.05,18.56Z"/>
                        </svg>
                        <h2 className='text-[#20262E]  font-bold text-xl'>موجودی و قیمت ها</h2>
                    </div>
                </div>

                <table className="w-full text-right text-gray-500 ">
                    <thead className="text-gray-700 text-xl ">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center">
                            کالا
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            قیمت
                        </th>
                        <th scope="col" className="px-6 py-3 text-center ">
                            موجودی محصولات
                        </th>
                    </tr>
                    </thead>
                    {posts.map(data => (
                        <tbody key={data.id}>
                        <tr className=" border-t border-gray-200 ">
                            <td className="px-6 py-4 text-center">
                                {data.name}
                            </td>
                            <td className="px-6 py-4 text-center flex items-center gap-2 justify-center  ">
                                <input type="text" className='outline-none border-none font-bold hover:text-blue-400' defaultValue={data.price} onClick={()=>{
                                    INSTANCE.patch(`/products/${data.id}`,{
                                        price:+prompt('قیمت را وارد کنید')
                                    })
                                }}/>
                                <span  className='text-zinc-300'>تومان</span>
                            </td>
                            <td className="px-6 py-4 text-center ">
                                <input type="text" className='outline-none border-none font-bold hover:text-blue-400' defaultValue={data.quantity} onClick={()=>{
                                    INSTANCE.patch(`/products/${data.id}`,{
                                        quantity:+prompt('موجودی را وارد کنید')
                                    })
                                }}/>
                            </td>
                        </tr>

                        </tbody>
                    ))}

                </table>

            </div>
        </>


    );
};

export default TableForPriceAndInventory;