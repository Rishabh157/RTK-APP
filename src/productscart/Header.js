import React from 'react';
import { BsCart } from 'react-icons/bs';

const Header = () => {

    return (
        <div className='border-black p-3 border-b sticky z-50 top-0 bg-white'>
            <div className='flex justify-end  border-slate-800'>
                <div className='pr-5 relative'>
                    <BsCart size={40} />
                </div>
            </div>
        </div>
    )
}

export default Header