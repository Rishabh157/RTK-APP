import React, { useState } from 'react';
import { useGetAllProductsQuery } from '../features/productsSliceces/productsApi';
// import Header from './Header';
import ATOMCart from './ATOMCart';
// import axios from 'axios';

const MOLCart = () => {


    // const [productsData, setproductsData] = useState([])

    let { data, isSuccess } = useGetAllProductsQuery()
    
    console.log("from state data :", data)


    return (
        <>
            <div className='grid grid-cols-12 gap-10 m-5'>
                {
                    isSuccess ? (
                        data.map((product) => {
                            return (
                                <div className='col-span-3' key={product.id}>
                                    <ATOMCart
                                        image={product.image}
                                        title={product.title}
                                        price={product.price}
                                        liked={product.rating.count}
                                    />
                                </div>
                            )
                        })

                    ) : <p>loading .................................</p>
                }
            </div>
            {/* <Header /> */}
            {/* <div className='grid grid-cols-12 gap-10 m-5'>
                {
                    productsData.map((product) => {
                        return (
                            <div className='col-span-3' key={product.id}>
                                <ATOMCart
                                    image={product.image}
                                    title={product.title}
                                    price={product.price}
                                    liked={product.rating.count}
                                />
                            </div>
                        )
                    })
                }
            </div> */}
        </>
    )
}

export default MOLCart;
