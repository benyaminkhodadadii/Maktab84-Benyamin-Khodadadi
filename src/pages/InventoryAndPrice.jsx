import React, {useEffect, useState} from 'react';
import styles from '../assests/styles/shadow.module.css'
import Pagination from "../components/Pagination";
import {INSTANCE} from "../api/constant/constantApi";
import {ToastContainer} from "react-toastify";
import TableForPriceAndInventory from "../components/TableForPriceAndInventory";
import UpdatePriceAndInventoryBtn from "../components/updatePriceAndInventoryBtn";

const InventoryAndPrice = () => {
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
            .catch(Promise.reject())
        setLoading(false)
    }, [])

    return (
        <>
            <UpdatePriceAndInventoryBtn h1Tag='موجودی و قیمت ها'>ذخیره</UpdatePriceAndInventoryBtn>
            <div className={`relative  ${styles.boxShadow} bg-white p-2 mt-12  sm:rounded-lg`}>
                <TableForPriceAndInventory  posts={currentPosts} loading={loading}/>
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

export default InventoryAndPrice;