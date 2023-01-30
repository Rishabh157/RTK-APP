import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';

const Debouncing = () => {

    const [value, setValue] = useState('');
    const [dogData, setdogData] = useState([]);

    useEffect(() => {
        axios.get(`https://dog.ceo/api/breed/${value.trim()}/images`).then(res => setdogData(res.data.message)).catch(err => console.log(err))
    }, [value])

    return (
        <div className='m-3 border-black'>
            <div className='flex justify-center mt-10'>
                <input
                    type='text'
                    placeholder='Search'
                    className='py-4 px-12 border-1 border-red-500 outline-none bg-cyan-500 rounded-lg text-black placeholder:text-black font-bold datalist-tag'
                    value={value}
                    list='doglist'
                    onChange={e => {
                        setValue(e.target.value.toLocaleLowerCase())
                    }}
                />
                <datalist id='doglist'>
                    <option value="Affenpinscher" />
                    <option value="African" />
                    <option value="Airedale" />
                    <option value="Akita" />
                    <option value="Appenzeller" />
                    <option value="Australian" />
                    <option value="Basenji" />
                    <option value="Beagle" />
                    <option value="Bluetick" />
                    <option value="Borzoi" />
                    <option value="Bouvier" />
                    <option value="Boxer" />
                    <option value="Brabancon" />
                    <option value="Briard" />
                    <option value="Buhund" />
                    <option value="Bulldog" />
                    <option value="Bullterrier" />
                    <option value="Cattledog" />
                    <option value="Chihuahua" />
                    <option value="Chow" />
                    <option value="Clumber" />
                    <option value="Cockapoo" />
                    <option value="Collie" />
                    <option value="Coonhound" />
                    <option value="Corgi" />
                    <option value="Cotondetulear" />
                    <option value="Dachshund" />
                    <option value="Dalmatian" />
                    <option value="Dane" />
                    <option value="Deerhound" />
                    <option value="Dhole" />
                    <option value="Dingo" />
                    <option value="Doberman" />
                    <option value="Elkhound" />
                    <option value="Entlebucher" />
                    <option value="Eskimo" />
                    <option value="Finnish" />
                    <option value="Frise" />
                    <option value="Germanshepherd" />
                    <option value="Greyhound" />
                    <option value="Groenendael" />
                    <option value="Havanese" />
                    <option value="Hound" />
                    <option value="Husky" />
                    <option value="Keeshond" />
                    <option value="Kelpie" />
                    <option value="Komondor" />
                    <option value="Kuvasz" />
                    <option value="Labradoodle" />
                    <option value="Labrador" />
                    <option value="Leonberg" />
                    <option value="Lhasa" />
                    <option value="Malamute" />
                    <option value="Malinois" />
                    <option value="Maltese" />
                    <option value="Mastiff" />
                    <option value="Mexicanhairless" />
                    <option value="Mix" />
                    <option value="Mountain" />
                    <option value="Newfoundland" />
                    <option value="Otterhound" />
                    <option value="Ovcharka" />
                    <option value="Papillon" />
                    <option value="Pekinese" />
                    <option value="Pembroke" />
                    <option value="Pinscher" />
                    <option value="Pitbull" />
                    <option value="Pointer" />
                    <option value="Pomeranian" />
                    <option value="Poodle " />
                    <option value="Pug" />
                    <option value="Puggle" />
                    <option value="Pyrenees" />
                    <option value="Redbone" />
                    <option value="Retriever" />
                    <option value="Ridgeback" />
                    <option value="Rottweiler" />
                    <option value="Saluki" />
                    <option value="Samoyed" />
                    <option value="Schipperke" />
                    <option value="Schnauzer" />
                    <option value="Segugio" />
                    <option value="Setter" />
                    <option value="Sharpei" />
                    <option value="Sheepdog" />
                    <option value="Shiba" />
                    <option value="Shihtzu" />
                    <option value="Spaniel" />
                    <option value="Spitz" />
                    <option value="Springer" />
                    <option value="Stbernard" />
                    <option value="Tervuren" />
                    <option value="Vizsla" />
                    <option value="Waterdog" />
                    <option value="Weimaraner" />
                    <option value="Whippet" />
                    <option value="Wolfhound" />

                </datalist>
            </div>

            {/* <p>Trebiute to JACK</p> */}
            <div className='grid grid-cols-12 gap-1 mt-10'>
                {value.length > 0 ? (
                    dogData?.map((ele, ind) => {
                        return (
                            <div
                                key={ind}
                                className='col-span-2 p-1 border-cyan-300 rounded-md border-2'>
                                <img
                                    alt='dog-imgages'
                                    src={ele}
                                    className='h-full w-full rounded-md'
                                />
                            </div>
                        )
                    })
                ) : <p>LOADING ....</p>}
            </div>
        </div>
    )
}

export default Debouncing;
