import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Debouncing = () => {


    const [value, setValue] = useState('');
    const [dogData, setdogData] = useState([])

    // console.log({ 'value': value })

    useEffect(() => {
        axios.get(`https://dog.ceo/api/breed/hound/images`).then(res => setdogData(res.data.message)).catch(err => console.log(err))
    }, [])


    return (
        <div className='m-3 border-black'>
            <div className='flex justify-center mt-10'>
                <input
                    type='text'
                    placeholder='Search'
                    className='py-4 px-12 border-1 border-red-500 outline-none bg-cyan-500 rounded-lg text-black placeholder:text-black font-bold'
                    value={value}
                    onChange={e => {
                        setValue(e.target.value)
                    }}
                />
            </div>

            <div className='grid grid-cols-12 gap-3 mt-10'>
                {dogData.map((ele, ind) => {
                    return (
                        <div

                            key={ind}
                            className='col-span-2 p-5 border-cyan-300 rounded-md border-2'>
                            <img
                                style={{
                                    height: "100%",
                                    width: "100%"
                                }}
                                alt='dog-imgages'
                                src={ele}
                                className='object-contain rounded-md border-black border-2'
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Debouncing;
