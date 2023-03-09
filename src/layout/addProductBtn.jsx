import React, {useState} from 'react';
import Button from "../components/Button";
import AddProduct from "./addProduct";

const AddProductBtn = ({children, h1Tag}) => {
    const [isStateAbs, setIsStateAbs] = useState(false);

    return (

    <div className='flex justify-between my-12 items-center relative m-auto'>
        <h1 className='text-2xl font-bold'>{h1Tag}</h1>

            <Button onClick={() => setIsStateAbs(true)}
                      styleButton={'bg-[#3264C7]  rounded px-8 py-2 text-white'}>{children}</Button>

        {isStateAbs && <AddProduct/>}
    </div>

)
    ;
};

export default AddProductBtn;