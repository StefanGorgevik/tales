import React from 'react'
import './StoryContent.css'

function StoryContent({click}) {
    return (
        <div className="story-content-main">
        <span onClick={() => click(false)} className='span-x'>x</span>
            <h1>Story title</h1>
            <p>
            Hi my name is  Iva and I am 66 years old. I got married at 18 years old and had my daughter on 19.  When  my daughter was 10 months old, I got divorced with my husband. We decided that we weren’t right for each other but kept good relations. I was young living with my daughter and my mother and I obviously needed a job. I asked in many places but no luck. Then I applied at another company. I was young and beautiful with long blonde hair, and the boss said to me “I will give you a job but if you go out with me for one night”. It was very clear what were his intentions. I immedietly declined and I got very angry. This was in the time of Yugoslavia. It was hopeless and that experience was the last straw. I went home and decided to write a letter to Marshal Tito. Yes, that’s right. I explained in the letter my situation and how disguisted I was from that man. I sent him the letter and a few days later I was called from the City Hall where they yelled at me “ How the hell could you write a letter to Tito, are you out of your mind”? Of course I didn’t expect a reply from him, but I actually got one. It probably wasn’t from Tito himself, but from his people. The next day I got a call that I am employed in the new factory.  And that’s the story of how Marshal Tito got me a job.
            </p>
        </div>
    )
}

export default StoryContent
