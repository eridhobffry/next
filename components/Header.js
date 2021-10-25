import React from 'react'
import Image from 'next/image'
import {HeartIcon, MenuIcon, PaperAirplaneIcon, PlusCircleIcon, SearchIcon, UserGroupIcon} from '@heroicons/react/outline'
import {HomeIcon} from '@heroicons/react/solid'

const Header = () => {
    return (
        <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
            <div className='flex justify-between max-w-6xl mx-5 xl:mx-auto items-center'>
                {/* LEFT */}
                <div className='relative w-24 h-24 hidden lg:inline-grid cursor-pointer'>
                    <Image
                        src='https://links.papareact.com/ocw'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <div className='relative w-10 h-10 lg:hidden cursor-pointer flex-shrink-0 '>
                    <Image
                        src='https://links.papareact.com/jjm'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                {/* MIDDLE */}
                <div className='max-w-xs'>
                    <div className='mt-1 relative p-3 rounded-md'>
                        <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                            <SearchIcon className='h-5 w-5 text-gray-500' />
                        </div>
                        <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' type='text' placeholder='Search' />
                    </div>
                </div>
                {/* RIGHT */}
                <div className='flex items-center justify-end space-x-4'>
                    <HomeIcon className='navBtn' />
                    <MenuIcon className='h-6 w-6 md:hidden cursor-pointer' />
                    <div className='relative navBtn'>
                        <PaperAirplaneIcon className='rotate-45 navBtn' />
                        <div className='absolute -top-2 -right-1 text-xs w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white'>
                            3
                        </div>
                    </div>
                    <PlusCircleIcon className='navBtn' />
                    <UserGroupIcon className='navBtn' />
                    <HeartIcon className='navBtn' />
                    <img src='https://dbq8hrmshvuto.cloudfront.net/assets2/114/697/646/080/normal/avatar.jpg' alt='profile picture' className='h-10 rounded-full w-10 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Header
