import React from "react";
import HomePage from "./pages/HomePage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {Route, Routes} from "react-router-dom";
import AdminPanel from "./pages/AdminPanel";
import OrderProduct from "./pages/OrderProduct";
import ManagmentPanel from "./pages/managmentPanel";
import InventoryAndPrice from "./pages/InventoryAndPrice";
import ProductOfCategory from "./pages/ProductOfCategory";
import FocusProduct from "./pages/FocusProduct";
import ErrorURL from "./pages/ErrorURL";
import ClientLogin from "./pages/ClientLogin";



function App() {
    return (
        <>
            <Header/>
            <div className='max-w-[1332px]  m-auto'>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route  path={`:productId`} element={<FocusProduct/>}/>
                    <Route path='/Digital' element={<ProductOfCategory category='Digital'/>}/>
                    <Route path='/Stationery' element={<ProductOfCategory category='Stationery'/>}/>
                    <Route path='/Clothes' element={<ProductOfCategory category='Clothes'/>}/>
                    <Route path={`/focusProduct`} element={<h1>FocusProduct</h1>}></Route>
                    <Route path='/clientLogin' element={<ClientLogin/>}></Route>
                    <Route path={'/adminPanel'} element={<AdminPanel/>}>
                        <Route path={':productOrder'} element={<OrderProduct/>}/>
                    </Route>
                    <Route path={'/adminPanel'} element={<ManagmentPanel/>}>
                        <Route path={'orderProduct'} element={<OrderProduct/>}/>
                        <Route path ={'inventoryAndPrice'} element={<InventoryAndPrice/>}/>
                    </Route>
                    <Route path='*' element={<ErrorURL/>}></Route>
                </Routes>
            </div>
            <Footer/>
        </>


    );
}

export default App;
