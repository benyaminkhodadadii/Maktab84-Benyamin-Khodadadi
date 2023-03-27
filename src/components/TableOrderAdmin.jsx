import React from 'react'
const TableOrderAdmin = ({posts, loading}) => {
    if (loading)
        return <h1>Loading.....</h1>
    return (
        <>
            <div className='w-full flex flex-col gap-8'>
                <table className="w-full text-right text-gray-500 ">
                    <thead className="text-gray-700 text-xl ">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center">
                            نام کاربر
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            مجموع مبلغ
                        </th>
                        <th scope="col" className="px-6 py-3 text-center ">
                            زمان ثبت سفارش
                        </th>
                        <th scope="col" className="px-6 py-3 text-center ">
                            بررسی سفارش
                        </th>
                    </tr>
                    </thead>
                    {posts.map(data => (
                        <tbody key={data.id}>
                        <tr className=" border-t border-gray-200 ">
                            <td className="px-6 py-4 text-center">
                                {data.username} {data.lastname}
                            </td>
                            <td className="px-6 py-4 text-center">
                                   {data.products[0].price}   تومان
                            </td>
                            <td className="px-6 py-4 text-center">
                                {data.createdAt}
                            </td>
                            <td className="px-6 py-4 text-center ">
                                <button onClick={()=>''}>بررسی سفارش</button>
                            </td>
                        </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </>
    );
};
export default TableOrderAdmin;