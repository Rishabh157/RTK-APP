import React, { useRef } from 'react'

const Form = () => {


    // const [email, setemail] = useState('');
    // const [password, setpassword] = useState('');

    const emailRef = useRef()
    const passwordRef = useRef()

    const onSubmit = () => {
        console.log
            (
                {
                    email: emailRef.current.value,
                    password: passwordRef.current.value
                }
            )
    }

    return (
        <div className='border-black border-1 p-10'>

            <form
                onClick={(e) => {
                    e.preventDefault()
                }}
                className='flex flex-col items-center justify-center'>

                <label htmlFor='email' className='pr-10'>EMAIL:</label>
                <input
                    id='email'
                    type='text'
                    name='email'
                    className='border-black border-2 outline-none p-5 bg-slate-200'
                    ref={emailRef}
                />

                <label htmlFor='password' className='pr-10 mt-10'>password:</label>
                <input
                    id='password'
                    type='password'
                    name='password'
                    className='border-black border-2 outline-none p-5 bg-slate-200'
                    ref={passwordRef}
                />

                <button
                    onClick={() => onSubmit()}
                    className='px-5 py-3 bg-cyan-500 hover:bg-cyan-900 hover:text-white transition-all rounded-lg mt-10'>
                    SUBMIT
                </button>
            </form>
        </div>
    )
}

export default Form;
