import React from 'react';
import styles from '../assests/styles/shadow.module.css'
import desktopLogo from '../assests/SvgImage/desktopLogo.svg'
import Logo from '../assests/SvgImage/—Pngtree—letter b logo_6059123.svg'
import solidBars from '../assests/SvgImage/solid bars.svg'
import home from '../assests/SvgImage/solid home.svg'
import Laptop from '../assests/SvgImage/solid laptop.svg'
import tshirt from '../assests/SvgImage/solid tshirt.svg'
import Button from "../components/Button";
import Icons from "../components/Icons";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {auth} from "../store/Feacture/reducer/isAuth";
import shadowBadge from "../assests/styles/shadow.module.css";

const Header = () => {
    const selectAuth = useSelector(state => state.data.token)
    const dispatch = useDispatch(state => state.data.token)
    const counterResult = useSelector(state=>state.dataBase.counter)
    return (
        <div className={` flex ${styles.shadowHeader}`}>
            <div className={`p-4  flex  w-[1332px] mx-auto items-center justify-between`}>
                <div className={'flex gap-8 hidden md:flex w-full justify-between items-center'}>
                    <Link to="/"><img src={desktopLogo} alt=""
                                      className='hidden sm:flex cursor-pointer'/></Link>
                    {selectAuth && (
                        <div className='flex items-center justify-between w-full'>
                            <h1 className='text-3xl font-bold'> پنل مدیریت فروشگاه خونه </h1>
                            <div className='flex gap-4 items-center '>

                            </div>

                            <Link to={'/'}>
                                <div className='flex gap-4'>
                                    <Link to={'/adminPanel'}>
                                        <Button
                                            styleButton={'text-[#20262E] bg-[#E4E4E5] hover:bg-[#20262E] hover:text-white'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16"
                                                 viewBox="0 0 14 16">
                                                <path className='fill-current' id="solid_user-tie"
                                                      data-name="solid user-tie"
                                                      d="M7,8A4,4,0,1,0,3,4,4,4,0,0,0,7,8ZM9.994,9.019,8.5,15l-1-4.25L8.5,9h-3l1,1.75L5.5,15,4.006,9.019A4.193,4.193,0,0,0,0,13.2v1.3A1.5,1.5,0,0,0,1.5,16h11A1.5,1.5,0,0,0,14,14.5V13.2A4.193,4.193,0,0,0,9.994,9.019Z"
                                                      fill="#20262e"/>
                                            </svg>
                                            پنل ادمین</Button>
                                    </Link>
                                    <Button onClick={() => dispatch(auth(''))}
                                            styleButton={'text-[#F62343] bg-[#FFD9DF] hover:bg-[#F62343] hover:text-white'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16"
                                             viewBox="0 0 14 16">
                                            <path className='fill-current' id="solid_user-tie"
                                                  data-name="solid user-tie"
                                                  d="M7,8A4,4,0,1,0,3,4,4,4,0,0,0,7,8ZM9.994,9.019,8.5,15l-1-4.25L8.5,9h-3l1,1.75L5.5,15,4.006,9.019A4.193,4.193,0,0,0,0,13.2v1.3A1.5,1.5,0,0,0,1.5,16h11A1.5,1.5,0,0,0,14,14.5V13.2A4.193,4.193,0,0,0,9.994,9.019Z"
                                                  fill="#20262e"/>
                                        </svg>
                                        خروج</Button>


                                </div>
                            </Link>
                        </div>

                    )}
                    {!selectAuth && (
                        <>
                            <Icons text={'محصولات دیجیتال'}><img src={home} className='w-5 h-5' alt=""/></Icons>
                            <Icons text={'محصولات دیجیتال'}><img src={Laptop} className='w-5 h-5' alt=""/></Icons>
                            <Icons text={'مد و پوشاک'}><img src={tshirt} className='w-5 h-5' alt=""/></Icons>
                            <div className='flex gap-4'>
                                <Link to={'/adminPanel'}>
                                    <Button styleButton={'text-[#20262E] bg-[#E4E4E5] hover:bg-[#20262E]'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16"
                                             viewBox="0 0 14 16">
                                            <path className='fill-current' id="solid_user-tie"
                                                  data-name="solid user-tie"
                                                  d="M7,8A4,4,0,1,0,3,4,4,4,0,0,0,7,8ZM9.994,9.019,8.5,15l-1-4.25L8.5,9h-3l1,1.75L5.5,15,4.006,9.019A4.193,4.193,0,0,0,0,13.2v1.3A1.5,1.5,0,0,0,1.5,16h11A1.5,1.5,0,0,0,14,14.5V13.2A4.193,4.193,0,0,0,9.994,9.019Z"
                                                  fill="#20262e"/>
                                        </svg>
                                        مدیریت</Button>
                                </Link>
                                <Link to={"/shopingPanel"}>
                                    <Button number={counterResult}
                                        styleButton={'bg-[#E6ECF8] text-[#3264C7] hover:bg-[#3264C7] hover:text-white'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                             height="12.445" viewBox="0 0 16 12.445">
                                            <path className='fill-current' id="solid_shopping-basket"
                                                  data-name="solid shopping-basket"
                                                  d="M16,37.108v.444a.667.667,0,0,1-.667.667h-.222L14.386,43.3a1.333,1.333,0,0,1-1.32,1.145H2.934A1.333,1.333,0,0,1,1.614,43.3L.889,38.219H.667A.667.667,0,0,1,0,37.553v-.444a.667.667,0,0,1,.667-.667H2.537L5.5,32.363a.889.889,0,1,1,1.438,1.046L4.735,36.442h6.529L9.059,33.409A.889.889,0,0,1,10.5,32.363l2.966,4.078h1.871A.667.667,0,0,1,16,37.108ZM8.667,42V38.886a.667.667,0,1,0-1.333,0V42a.667.667,0,1,0,1.333,0Zm3.111,0V38.886a.667.667,0,1,0-1.333,0V42a.667.667,0,1,0,1.333,0ZM5.556,42V38.886a.667.667,0,1,0-1.333,0V42a.667.667,0,1,0,1.333,0Z"
                                                  transform="translate(0 -31.997)" fill="#3264c7"/>
                                        </svg>
                                        سبد خرید
                                        <div className={`rounded-full bg-[#F62343] 
            w-6 h-6 text-white font-bold flex items-center
             justify-center  ${shadowBadge.shadowRedBadge} absolute bottom-7 right-[-12px]`}>{counterResult}</div>
                                    </Button>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
                <div className={'md:hidden w-full flex justify-between p-4 items-center'}>
                    <Icons isBg={'bg-[#E6ECF8] p-4'}><img src={solidBars}/> </Icons>
                    <Link to={'/homePage'}> <img src={Logo} className='w-16 h-16'/></Link>
                    <div className='flex gap-8'>
                        <Button bgColor={'bg-[#E6ECF8]'}> سبد خرید</Button>
                        <Button bgColor={'bg-[#E6ECF8]'}>مدیریت</Button>
                    </div>

                </div>

            </div>


        </div>
    )
        ;
};

export default Header;