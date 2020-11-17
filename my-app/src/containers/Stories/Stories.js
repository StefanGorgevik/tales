import React, { useState, useEffect } from 'react'
import './Stories.css'
import Story from '../../components/Story/Story'
import StoryContent from '../../components/StoryContent/StoryContent'

function Stories() {
    let [clicked, setClicked] = useState(false)
    let arr = ['grandma', 1, 2, 3, 4, 5, 6, 7]

    const clickedHandler = (story, i) => {
        console.log('clicked', story, i)
        setClicked(true)
        console.log('clicked', clicked)
    }
    return (
        <div className='stories-main'>
            <h3>Stories</h3>
            <div className={!clicked ? 'stories-div' : 'stories-inactive'}>
                { 
                    arr.map((story, i) => {
                        return (
                            <Story click={clickedHandler} story={story} number={i} key={story + ' ' + i} />
                        )
                    })
                }
                 
            </div>
                 {clicked ? <StoryContent click={setClicked}/> : null}
        </div>
    )
}
export default Stories;