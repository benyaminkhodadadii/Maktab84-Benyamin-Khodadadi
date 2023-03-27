import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Icons from "./Icons";
import {INSTANCE} from "../api/constant/constantApi";

const NavLinkProduct = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        INSTANCE.get(`/category`).then(res => setItems(res.data)).catch(e => console.error(e))
    }, [])
    return (
        <>
            {items.map(data => (
                <Link key={data.id} to={`/${data.name}`}>
                    <Icons text={data.name}><img src={data.icon} className='w-5 h-5' alt=""/></Icons>
                </Link>
            ))}
        </>

    );
};

export default NavLinkProduct;