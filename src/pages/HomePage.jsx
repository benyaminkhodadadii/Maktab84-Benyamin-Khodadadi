import React from 'react';
import mainBanner from '../assests/SvgImage/mainBannerDesktop.svg'

import ListCardCategory from "../components/listCardCategory";
const HomePage = () => {
    return (
        <div>
            <img className='mt-12 hidden md:block cursor-pointer' src={mainBanner} alt=""/>
          <ListCardCategory/>
          <ListCardCategory/>
        </div>
    );
};

export default HomePage;