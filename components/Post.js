import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/outline'
import React from 'react'

const Post = ({userImg, id, img, caption, username}) => {
    return (
        <div className='bg-white my-7 border-rounded-sm'>
            {/* Header */}
            <div className='flex items-center p-5 justify-between'>
                <img className='rounded-full w-14 h-14 object-cover border p-1 mr-3' src={userImg} alt={username} />
                    <p className='flex-1 font-bold'>
                        {username}
                    </p>
                <DotsHorizontalIcon className='h-5' />
            </div>
            {/* Image */}
            <img src={img} className='w-full object-cover' alt={caption} />
            {/* Buttons */}
            <div className='flex justify-between px-4 pt-4'>
            <div className='flex space-x-2'>
                <HeartIcon className='btn' />
                <ChatIcon className='btn' />
                <PaperAirplaneIcon className='btn' />
            </div>
            <BookmarkIcon className='btn' />
            </div>
            {/* Likes */}
            <p className='pb-2 p-5 truncate'>
                <span className='font-bold'>
                   2 Likes
                </span>
            </p>
            {/* Caption */}
            <p className='p-5 pt-0 truncate'>
                <span className='font-bold mr-4'>
                    {username}
                </span>
                {caption}
            </p>
            {/* Comments */}
            {/* input box */}
            <form className='flex items-center p-4'>
                <EmojiHappyIcon className='h-7' />
                <input
                    type='text'
                    placeholder='Add a comment...'
                    className='border-none flex-1 focus:ring-0 outline-none'
                />
                <button className='font-semibold text-blue-600'>
                    Post
                </button>
            </form>
        </div>
    )
}

export default Post
