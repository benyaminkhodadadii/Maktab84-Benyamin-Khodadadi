import React from 'react';
import {Outlet} from "react-router-dom";
import ManagmentPanel from "./managmentPanel";

const ShareLayoutAdmin = () => {
    return (
        <div>
            <ManagmentPanel/>
            <Outlet/>
        </div>
    );
};

export default ShareLayoutAdmin;