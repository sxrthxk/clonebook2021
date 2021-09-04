import React from 'react'
import InputBox from './InputBox'
import Posts from './Posts'

function Feed() {
    return (
        <div className="w-11/12 lg:w-3/5 xl:w-2/5 flex flex-col items-stretch mr-10 lg:mx-5 md:px-5 py-5">
            <InputBox />
            <Posts />
        </div>
    )
}

export default Feed
