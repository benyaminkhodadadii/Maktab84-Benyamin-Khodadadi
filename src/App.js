import React from "react";
import HomePage from "./pages/HomePage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {Route, Routes} from "react-router-dom";
import AdminPanel from "./pages/AdminPanel";
import ManagmentPanel from "./pages/managmentPanel";
import ShareLayoutAdmin from "./pages/ShareLayoutAdmin";
import OrderProduct from "./pages/OrderProduct";

function App() {


  return (
      <>
          <Header/>
          <div className='max-w-[1332px]  m-auto'>
            <Routes>
                <Route path={`/`} element={<HomePage/>}></Route>
                <Route path={`/focusProduct`} element={<h1>FocusProduct</h1>}></Route>
                <Route path={`/allCategory`} element={<h1>its All Category</h1>}></Route>
                <Route path={`/adminPanel`} element={<AdminPanel/>}/>
                <Route path={'/managmentPanel'} element={<ManagmentPanel/>}></Route>
                <Route path={'/adminPanel'} element={<ShareLayoutAdmin/>}>
                    {/*<Route index element={<h1>order</h1>}></Route>*/}
                    <Route path={':productOrder'} element={<OrderProduct/>}/>
                </Route>

            </Routes>
          </div>
          <Footer/>
      </>


);
}

export default App;
