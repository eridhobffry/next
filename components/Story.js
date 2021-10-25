import React from 'react'

const Story = ({ img, username }) => {
    return (
        <div>
            <img className='w-14 h-14 rounded-full p-[1.5px] border-2 border-red-500 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src={img} alt={username} />
            <p className='text-xs w-14 truncate'>
                {username}
            </p>
        </div>
    )
}

export default Story
