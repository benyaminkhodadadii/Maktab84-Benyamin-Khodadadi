import React, {useEffect, useState} from 'react';
import {BASE_URL, INSTANCE} from "../api/constant/constantApi";
import {useNavigate, useParams} from "react-router-dom";
import shadows from "../assests/styles/shadow.module.css";
import {useDispatch, useSelector} from "react-redux";
import {decrease, increase} from "../store/Feacture/reducer/dataBase";
import Button from "../components/Button";

const FocusProduct = () => {
    const counterResult = useSelector(state=>state.dataBase.counter)
    // const orderItemsSelect = useSelector(state =>state.dataBase.dataList)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [data, setData] = useState([]);
    // const [cardShopping,setCardShopping]=useState([])
    const params = useParams();
    useEffect(() => {
        INSTANCE.get(`/products/${params.productId}`).then(res => setData(res.data))

    }, [])
    //
    // const handleSubmit = ()=>{
    //     setCardShopping(data)
    //     localStorage.setItem('orders',JSON.stringify([...cardShopping,data]));
    //     console.log(orderItemsSelect)
    // }
    return (
        <div className={`bg-white w-6/12 m-auto rounded p-[20px] ${shadows.shadowHeader} mt-12`}>
        <div className='flex items-center gap-4'>
            <img className='w-[240px] h-auto' src={BASE_URL + data.image} alt=""/>
            <div className='flex flex-col gap-8'>
                <h1 className='text-xl font-bold'>{data.name}</h1>
                <div className='flex gap-8 items-center'>
                    <div className='flex gap-4 bg-[#E6ECF8] rounded h-[38px] items-center justify-center '>
                        <button onClick={()=>dispatch(increase())}
                            className='h-full bg-[#F62343] p-2 text-2xl text-white rounded-r flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                 viewBox="0 0 21.089 21.089">
                      <path className='fill-current' id="solid_plus" data-name="solid plus"
                            d="M19.582,40.285H12.8V33.506A1.507,1.507,0,0,0,11.3,32H9.791a1.507,1.507,0,0,0-1.506,1.506v6.779H1.506A1.507,1.507,0,0,0,0,41.791V43.3A1.507,1.507,0,0,0,1.506,44.8H8.285v6.779a1.507,1.507,0,0,0,1.506,1.506H11.3A1.507,1.507,0,0,0,12.8,51.582V44.8h6.779A1.507,1.507,0,0,0,21.089,43.3V41.791A1.507,1.507,0,0,0,19.582,40.285Z"
                            transform="translate(0 -32)"/>
                            </svg>

                        </button>
                        <p>{counterResult}</p>
                        <button onClick={()=>dispatch(decrease())}
                            className='h-full bg-[#F62343] p-2 text-2xl text-white rounded-l flex items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="4"
                                     viewBox="0 0 21.09 4.519">
                                     <path className='fill-current' id="solid_minus" data-name="solid minus"
                                           d="M19.584,208H1.506A1.507,1.507,0,0,0,0,209.506v1.506a1.507,1.507,0,0,0,1.506,1.506H19.584a1.507,1.507,0,0,0,1.506-1.506v-1.506A1.507,1.507,0,0,0,19.584,208Z"
                                           transform="translate(0 -208)"/>
                                </svg>
                            </button>
                    </div>
                    <h2 className='font-bold text-2xl text-[#3264C7] flex items-center gap-2'>
                        {data.price}
                        <span
                        className='text-sm text-zinc-300'>تومان</span></h2>
                </div>
                <div className='flex justify-between'>
                    <p>مبلغ پرداختی :</p>
                    <h2 className='font-bold text-2xl text-[#3CCF4E] flex items-center gap-2'>
                        {data.price*counterResult}
                        <span
                            className='text-sm text-zinc-300'>تومان</span></h2>
                </div>
               <Button onClick={()=>navigate('/clientLogin')} styleButton='bg-[#3CCF4E] py-2 rounded text-white font-bold'>افزودن به سبد خرید</Button>
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <h3 className='font-bold text-2xl'>توضیحات</h3>
            <div className='p-8 bg-[#FAFAFC] rounded'>
                <p>{data.description}</p>
            </div>

        </div>
    </div>);
};

export default FocusProduct;