import React, { useEffect, useState } from 'react'
import faker from 'faker'
import Story from './Story'

const Stories = () => {
    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) =>({
            ...faker.helpers.contextualCard(),
            id: i
        }))
        setSuggestions(suggestions)
    },[])
    return (
        <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-600'>
            {suggestions.map(s => {
               return <Story key={s.id} img={s.avatar} username={s.username} />
            })}
        </div>
    )
}

export default Stories
