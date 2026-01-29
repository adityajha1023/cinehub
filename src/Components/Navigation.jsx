import { Box, History, Newspaper, SearchIcon, SquarePen } from 'lucide-react'
import user from '../assets/user.jpg'

function Navigation() {
    return (
        <div className="md:block hidden h-screen fixed bg-gray-50 border-r w-[18%] overflow-y-scroll p-4 z-50">
            <img src="./logo.png" alt="Nexus" className='h-12' />
            <ul className='flex flex-col justify-center items-center gap-4'>
            <a href="#" className='w-full flex justify-center items-center gap-2 border border-gray-500 text-gray-600 p-2 mt-4 rounded-full hover:text-white hover:bg-black transition-all duration-500'> 
                <SquarePen className='w-4 h-4' />New Chat
            </a>
            <a href="#" className='w-full flex justify-start items-center gap-2 text-gray-500 px-2 pt-2 hover:text-black transition-all duration-300 hover:scale-[102%]'>
                <SearchIcon className='w-4 h-4' />Search chats
            </a>
            <a href="#" className='w-full flex justify-start items-center gap-2 text-gray-500 px-2 hover:text-black transition-all duration-300 hover:scale-[102%]'>
                <History className='w-4 h-4' />History
            </a>
            <a href="#" className='w-full flex justify-start items-center gap-2 text-gray-500 px-2 hover:text-black transition-all duration-300 hover:scale-[102%]'>
                <Box className='w-4 h-4' />AI Models
            </a>
            <a href="#" className='w-full flex justify-start items-center gap-2 text-gray-500 px-2 hover:text-black transition-all duration-300 hover:scale-[102%]'>
                <Newspaper className='w-4 h-4' />News
            </a>
            </ul>

            <ul className='flex flex-col justify-center items-center'>
               <img src={user} alt="" />
            </ul>
        </div>
    )
}

export default Navigation
