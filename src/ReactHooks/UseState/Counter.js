import React, { useState, useEffect } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const setNumber = (number) => {
        setCounter((previousState) => {
            return previousState + number
        })
    }

    useEffect(() => {
        console.log('counter :', counter)
    }, [counter]) // it tells the component when the change the array in define state log me in it !

    return (
        <div>

            <div className='flex'>
                <button
                    onClick={() => setNumber(-1)}
                    className='px-5 py-3 bg-cyan-500 hover:bg-cyan-900 hover:text-white transition-all rounded-lg mt-10'>
                    -
                </button>

                <span>  <h1> {counter} </h1> </span>
                <button
                    onClick={() => setNumber(1)}
                    className='px-5 py-3 bg-cyan-500 hover:bg-cyan-900 hover:text-white transition-all rounded-lg mt-10'>
                    +
                </button>

            </div>



        </div>
    )
}

export default Counter;
