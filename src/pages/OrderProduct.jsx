import React, {useEffect, useState} from 'react';
import styles from '../assests/styles/shadow.module.css'
import AddProductBtn from "../layout/addProductBtn";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import {INSTANCE} from "../api/constant/constantApi";
import {ToastContainer} from "react-toastify";

const OrderProduct = () => {
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
        INSTANCE.get('/products')
            .then(res => setPosts(res.data))
            .catch(e=>Promise.reject(e))
        setLoading(false)
    }, [])
    return (
        <>
            <AddProductBtn h1Tag='افزودن کالا'>افزودن کالا</AddProductBtn>
            <div className={`relative  ${styles.boxShadow} bg-white p-2 mt-12  sm:rounded-lg`}>
                <Table posts={currentPosts}  setPosts={setPosts} loading={loading} />
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

export default OrderProduct;