import React from 'react'

function Navigation() {
    return (
        <div className='h-16 flex justify-between items-center shadow-sm border-b border-gray-100 px-20 py-4 font-p'>
            <a href="/" className='font-bold text-h6 '>CineHub</a>
            <ul className='flex justify-center items-center gap-10 font-medium text-gray-500'>
                <a href="#" className='hover:text-black transition-all duration-300 hover:scale-105'>For you</a>
                <a href="#" className='hover:text-black transition-all duration-300 hover:scale-105'>Trending</a>
                <a href="#" className='hover:text-black transition-all duration-300 hover:scale-105'>Upcoming</a>
                <a href="#" className='hover:text-black transition-all duration-300 hover:scale-105'>Login</a>
                <a href="#" className='bg-[#d80032] px-4 py-2 text-white rounded-full hover:bg-[#ffd5df] hover:text-[#d80032] font-semibold transition-all duration-300'>Get Started</a>
            </ul>
        </div>
    )
}

export default Navigation
