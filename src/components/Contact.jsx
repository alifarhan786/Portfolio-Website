import React from 'react'

const Contact = () => {
    return (
        <div id="Contact" className='pt-20 h-screen w-full bg-gradient-to-b from-black to-pink-900 text-white p-4'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                    <div className='pb-8'>
                            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                            <p className='py-6'>Submit the form below to get in touch </p>
                    </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/0ed0fc50-f370-467d-93a2-c76d39376228" method='POST' className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name='Name' placeholder='Enter your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none '/>
                        <input type="email" name='Email' placeholder='Enter your Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none '/>
                        <textarea name="Message" placeholder='Enter Your Message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                        <button type='submit' className='b bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
