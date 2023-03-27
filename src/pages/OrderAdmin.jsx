import React, {useEffect, useState} from 'react';
import styles from '../assests/styles/shadow.module.css'
import Pagination from "../components/Pagination";
import {INSTANCE} from "../api/constant/constantApi";
import {ToastContainer} from "react-toastify";
import TableOrderAdmin from "../components/TableOrderAdmin";

const OrderAdmin = () => {
    const [posts, setPosts] = useState([]),
        [loading, setLoading] = useState(false),
        [currentPage, setCurrentPage] = useState(1),
        [postsPerPage,] = useState(5),
        indexOfLastPost = currentPage * postsPerPage,
        indexOfFirstPost = indexOfLastPost - postsPerPage,
        currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost),
        paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        setLoading(true)
        INSTANCE.get('/orders')
            .then(res => setPosts(res.data))
            .catch(e=>Promise.reject(e))
        setLoading(false)
    }, [])
    return (
        <>
            <h1 className='text-2xl font-bold my-12 p-4'>بررسی سفارش های انجام شده</h1>
            <div className={`relative  ${styles.boxShadow} bg-white p-2 mt-12  sm:rounded-lg`}>
                <TableOrderAdmin posts={currentPosts}  setPosts={setPosts} loading={loading} />
            </div>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default OrderAdmin;