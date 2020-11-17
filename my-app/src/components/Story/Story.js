import React, { useState, useEffect } from 'react'
import './Story.css'

function Story(props) {
    return (
        <div className='story-main' onClick={() => props.click(props.story, props.number)}>
            <div>
                <h3> {props.story} {props.number}</h3>
            </div>
        </div>
    )
}

export default Story;