import React from "react";
import HomePage from "./pages/HomePage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {Route, Routes} from "react-router-dom";
import AdminPanel from "./pages/AdminPanel";
import OrderProduct from "./pages/OrderProduct";
import ManagmentPanel from "./pages/managmentPanel";
import InventoryAndPrice from "./pages/InventoryAndPrice";


function App() {
    return (
        <>
            <Header/>
            <div className='max-w-[1332px]  m-auto'>
                <Routes>
                    <Route path={`/`} element={<HomePage/>}></Route>
                    <Route path={`/focusProduct`} element={<h1>FocusProduct</h1>}></Route>
                    <Route path={`/allCategory`} element={<h1>its All Category</h1>}></Route>
                    {/*<Route path={`/adminPanel`} element={<AdminPanel/>}/>*/}
                    <Route path={'/adminPanel'} element={<AdminPanel/>}>
                        <Route path={':productOrder'} element={<OrderProduct/>}/>
                    </Route>
                    <Route path={'/adminPanel'} element={<ManagmentPanel/>}>
                        <Route path={'orderProduct'} element={<OrderProduct/>}>
                            <Route path={":productId"}></Route>


                        </Route>
                        <Route path ={'inventoryAndPrice'} element={<InventoryAndPrice/>}/>

                    </Route>
                </Routes>
            </div>
            <Footer/>
        </>


    );
}

export default App;
