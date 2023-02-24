import React from 'react';
import styles from '../assests/styles/shadow.module.css'
import {NavLink} from "react-router-dom";
const ManagmentPanel = () => {
    return (
        <>

        <div className='grid grid-cols-3 gap-4 mt-12'>
           <NavLink  to={'./orderProduct'}>
               <div className={`bg-white hover:bg-[#3CCF4E] py-10 col-span-1 rounded flex gap-4  items-center justify-center ${styles.boxShadow}`}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="16.019" height="13.316" viewBox="0 0 16.019 13.316">
                       <path id="solid_store" data-name="solid store" d="M15.712,3.085,14.024.39a.833.833,0,0,0-.7-.39H2.812a.833.833,0,0,0-.7.39L.419,3.085A2.32,2.32,0,0,0,1.948,6.632a2.7,2.7,0,0,0,.356.023,2.568,2.568,0,0,0,1.919-.861,2.57,2.57,0,0,0,3.839,0,2.57,2.57,0,0,0,3.839,0,2.577,2.577,0,0,0,1.919.861,2.674,2.674,0,0,0,.356-.023,2.318,2.318,0,0,0,1.534-3.547ZM13.826,7.49a3.3,3.3,0,0,1-.767-.1v2.6H3.072v-2.6a3.445,3.445,0,0,1-.767.1,3.509,3.509,0,0,1-.468-.031,3.271,3.271,0,0,1-.427-.094v5.118a.831.831,0,0,0,.832.832H13.894a.831.831,0,0,0,.832-.832V7.365a2.656,2.656,0,0,1-.427.094,3.617,3.617,0,0,1-.473.031Z" transform="translate(-0.056)" fill="#20262e"/>
                   </svg>

                   <span className='font-bold text-xl'>کالا ها</span>
               </div>
           </NavLink>

            <div className={`bg-white hover:bg-[#3CCF4E] py-10 col-span-1 rounded flex gap-4  items-center justify-center ${styles.boxShadow}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20.48" viewBox="0 0 16 20.48">
                    <path id="solid_coins" data-name="solid coins" d="M0,16.212V17.92c0,1.412,2.688,2.56,6,2.56s6-1.148,6-2.56V16.212c-1.291,1.164-3.65,1.708-6,1.708S1.291,17.376,0,16.212ZM10,5.12c3.312,0,6-1.148,6-2.56S13.313,0,10,0,4,1.148,4,2.56,6.688,5.12,10,5.12Zm-10,6.9V14.08c0,1.412,2.688,2.56,6,2.56s6-1.148,6-2.56V12.016c-1.291,1.36-3.653,2.064-6,2.064S1.291,13.376,0,12.016Zm13,.44c1.791-.444,3-1.268,3-2.216V8.532a6.714,6.714,0,0,1-3,1.38ZM6,6.4c-3.313,0-6,1.432-6,3.2s2.688,3.2,6,3.2,6-1.432,6-3.2S9.313,6.4,6,6.4Zm6.853,2.252C14.728,8.22,16,7.372,16,6.4V4.692a8.535,8.535,0,0,1-5.022,1.672A4.084,4.084,0,0,1,12.853,8.652Z" fill="#20262e"/>
                </svg>

                <span className='font-bold text-xl'>کالا ها</span>
            </div>
            <div className={`bg-white hover:bg-[#3CCF4E] py-10 col-span-1 rounded flex gap-4  items-center justify-center ${styles.boxShadow}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26.898" height="16" viewBox="0 0 26.898 16">
                    <path id="solid_box-open" data-name="solid box-open" d="M17.85,39.964a2.133,2.133,0,0,1-1.74-.836l-2.7-3.807-2.7,3.807a2.14,2.14,0,0,1-1.744.839,2.252,2.252,0,0,1-.559-.068L2.649,38.5v6.357a1.192,1.192,0,0,0,1.017,1.107L12.752,47.9a3.2,3.2,0,0,0,1.3,0l9.094-1.932a1.2,1.2,0,0,0,1.017-1.107V38.5l-5.757,1.4A2.252,2.252,0,0,1,17.85,39.964Zm8.935-4.007L24.62,32.286a.721.721,0,0,0-.7-.318L13.408,33.107l3.854,5.432a.75.75,0,0,0,.777.261l8.317-2.018a.569.569,0,0,0,.429-.825ZM2.2,32.286.031,35.957a.563.563,0,0,0,.424.821L8.772,38.8a.75.75,0,0,0,.777-.261l3.858-5.428L2.893,31.968A.721.721,0,0,0,2.2,32.286Z" transform="translate(0.042 -31.963)" fill="#20262e"/>
                </svg>
                <span className='font-bold text-xl'>کالا ها</span>
            </div>
        </div>
        </>
    );
};

export default ManagmentPanel;