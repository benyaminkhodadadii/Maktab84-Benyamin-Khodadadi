import React from 'react';
import styles from '../assests/styles/shadow.module.css'
import desktopLogo from '../assests/SvgImage/desktopLogo.svg'
import phoneLogo from '../assests/SvgImage/solid phone.svg'
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <div className={`mt-12 py-4 ${styles.shadowFooter}  lg:px-[120px] xl:px-[290px]`}>
            <div className={'flex justify-between p-4 items-center border-b'}>
                <Link to="/" ><img src={desktopLogo} className={'w-40 h-max '} alt=""/></Link>
                <div className='flex gap-2'>
                    <div className='bg-[#E6ECF8] p-2 rounded'><img src={phoneLogo} alt=""/></div>
                    <p className='font-bold text-xl text-black'>0214373365</p>
                </div>
            </div>
            <h2 className='text-[#F62343] py-2 text-center font-bold text-l'>تمامی حقوق برای این سایت محفوظ است</h2>
        </div>
    );
};

export default Footer;