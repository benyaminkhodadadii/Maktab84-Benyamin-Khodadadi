import React from 'react';
import styles from '../assests/styles/shadow.module.css'
import AddProductBtn from "../layout/addProductBtn";
import Table from "../components/Table";

// import AddProduct from "../layout/addProduct";
const OrderProduct = () => {

    return (
        <>
            <AddProductBtn/>
            <div className={`relative overflow-x-auto ${styles.boxShadow} bg-white p-2 mt-12  sm:rounded-lg`}>
                <Table/>
            </div>


        </>


    );
};

export default OrderProduct;