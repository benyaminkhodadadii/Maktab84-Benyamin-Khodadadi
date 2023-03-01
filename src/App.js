import React from "react";
import HomePage from "./pages/HomePage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {Route, Routes} from "react-router-dom";
import AdminPanel from "./pages/AdminPanel";
// import ShareLayoutAdmin from "./pages/ShareLayoutAdmin";
import OrderProduct from "./pages/OrderProduct";
import ManagmentPanel from "./pages/managmentPanel";

// import {useSelector} from "react-redux";

function App() {
    // const select = useSelector(state=>state.data.token);

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
                    <Route path={'/managmentPanel'} element={<ManagmentPanel/>}>
                        <Route path={'orderProduct'} element={<OrderProduct/>}>
                        <Route path={":productId"}></Route>
                        </Route>
                    </Route>


                </Routes>
            </div>
            <Footer/>
        </>


    );
}

export default App;
