import React from 'react'
import Post from './Post'

const postsData = [
    {
        id: 123,
        username: 'eridhobffry',
        userImg: 'https://d2rbodpj0xodc.cloudfront.net/stories/765826051862430806/e18bed62-912c-4938-bfe7-cd4e90aefb92-320x480.jpeg',
        img: 'https://profile-images.xing.com/images/6cfc55ec22b1c2b4e7473d4e97aa299d-1/malsa-nirmala-rusli.1024x1024.jpg',
        caption: 'AWESOME!!!',
    }
]

const Posts = () => {
    return (
        <div>
            {
                postsData.map(post => {
                    return <Post
                        key={post.id}
                        userImg={post.userImg}
                        username={post.username}
                        img={post.img}
                        caption={post.caption}
                        id={post.id}
                    />
                })
            }
        </div>
    )
}

export default Posts
