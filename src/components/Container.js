import React from 'react'
import Emoji from './Emoji'
import './Container.css'

function Container({ emojiData }) {
    return (
        <div className="grid">
            {
                emojiData.slice(0, 100).map(emoji => <Emoji key={emoji.title} item={emoji} />)
            }
        </div>
    )
}

export default Container