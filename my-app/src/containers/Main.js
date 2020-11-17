import React, { useState, useEffect } from 'react'
import './Main.css' 
import Stories from '../containers/Stories/Stories'

function Main() {

    useEffect(() => {
        console.log('hello')
    }, [])

    return (
        <div className='main-div'>
            <nav className='main-header'>
                <h2>Tales from the elderly</h2>
            </nav>
                <Stories/>
        </div>
    )
}

export default Main