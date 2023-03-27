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
import PaymentCard from "./pages/PaymentCard";
import OrderAdmin from "./pages/OrderAdmin";



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
                    <Route path={'/login'} element={<AdminPanel/>}>
                        <Route path={':productOrder'} element={<OrderProduct/>}/>
                    </Route>
                    <Route path='/register' element={<ClientLogin h1Text='به سایت ما خوش آمدید'/>}/>
                    <Route path={'/login'} element={<ManagmentPanel/>}>
                        <Route path={'orderProduct'} element={<OrderProduct/>}/>
                        <Route path ={'inventoryAndPrice'} element={<InventoryAndPrice/>}/>
                        <Route path={'orderAdmin'} element={<OrderAdmin/>}/>
                    </Route>

                    <Route path='/clientProduct' element={<ClientLogin h1Text='برای ادامه خرید باید ثبت نام کنید'/>}></Route>
                    <Route path='*' element={<ErrorURL/>}></Route>
                    <Route  path='/paymentCard' element={<PaymentCard/>}></Route>
                </Routes>
            </div>
            <Footer/>

        </>


    );
}

export default App;
