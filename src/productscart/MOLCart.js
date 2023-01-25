import React, { useState } from 'react';
import Header from './Header';
import ATOMCart from './ATOMCart';
import axios from 'axios';

const MOLCart = () => {


    const [productsData, setproductsData] = useState([])


    const getProductsData = async () => {
        try {
            let getProductsData = await axios.get('https://fakestoreapi.com/products/')
            setproductsData(getProductsData.data)
        } catch (err) {
            console.log('err from fetching data via axios:', err)
        }
    }

    getProductsData()

    console.log('from state products Data =>', productsData)

    return (
        <>
            {/* <Header /> */}
            <div className='grid grid-cols-12 gap-10 m-5'>

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


            </div>
        </>
    )
}

export default MOLCart