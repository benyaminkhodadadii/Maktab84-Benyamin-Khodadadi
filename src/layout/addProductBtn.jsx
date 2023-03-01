import React , {useState} from 'react';
import Button from "../components/Button";
import AddProduct from "./addProduct";

const AddProductBtn = () => {
    const [isStateAbs, setIsStateAbs] = useState(false);
    return (

        <div className='flex justify-between mt-12 items-center relative m-auto'>
            <h1 className='text-2xl font-bold'>افزودن کالا</h1>
            <Button onClick={() => setIsStateAbs(true)} styleButton={'bg-[#3264C7]  rounded px-8 py-2 text-white'}>افزودن
                کالا</Button>
            {isStateAbs && <AddProduct/>}
        </div>

    );
};

export default AddProductBtn;