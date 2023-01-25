import React from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { FiShare2 } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { RiPlaystationLine } from 'react-icons/ri';
import { BiDollar } from 'react-icons/bi';

// import { useDispatch, useSelector } from 'react-redux';
// import { increaseLiked } from '../features/productsSliceces/likeProductSlice';



const ATOMCart = ({ image, title, liked, price }) => {

    // const like = useSelector(state => state.likedProducts.counterLike);

    // console.log('from ATOMLIKE', like)

    return (
        <div className='border-2 border-slate-500 drop-shadow-lg p-2 rounded-lg bg-gray-50'>
            <div className='h-3/4 '>
                <img
                    className='object-fill rounded-md'
                    src={`${image}`}
                    alt='cartimg'
                />
            </div>
            <p className='text-12'> {title} </p>
            <p className='text-12 flex items-center '> <BiDollar size={20} /> {price} </p>
            <div className='flex justify-around my-3'>
                <div className='hover:cursor-pointer'>
                    <AiOutlineLike className='transition duration-150 ease-out hover:text-cyan-400' size={30} />
                    <p className='pl-1 pt-2'>{liked}</p>
                </div>
                <div className='hover:cursor-pointer'>
                    <FiShare2 className='transition duration-150 ease-out hover:text-cyan-400' size={30} />
                </div>
                <div className='hover:cursor-pointer'>
                    <GoLocation className='transition duration-150 ease-out hover:text-cyan-400' size={30} />
                </div>
                <div className='hover:cursor-pointer'>
                    <RiPlaystationLine className='transition duration-150 ease-out hover:text-cyan-400' size={30} />
                </div>
            </div>
        </div>
    )
}

export default ATOMCart;
