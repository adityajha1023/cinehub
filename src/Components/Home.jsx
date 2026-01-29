import React from 'react'
import { Plus, AudioLines } from 'lucide-react'

function Home() {
    return (
        <div className='ml-[20%] h-[calc(100vh-120px)] flex flex-col justify-center items-center'>
            <h1 className='text-h2 font-medium'>nexus</h1>

            <div className="flex flex-row justify-start items-center mt-4 border border-black/20 shadow-sm rounded-full w-[40rem] px-4 py-2 gap-2">
                <a href="#"> <Plus className='w-5 h-5 text-gray-500' /> </a>
                <input type="text" placeholder="Ask anything. Type @ for mentions and / for shortcuts." className="outline-none w-full"/>   
                <button className='bg-black rounded-full p-2'>
                    <AudioLines className='w-6 h-6 text-white'/>
                </button>
            </div>
        </div>
    )
}

export default Home
