import React, { useState, useEffect } from 'react'
import Container from './Container'
import './App.css'
import data from '../json/data.json'

function App() {
    const [emojiData, setEmojiData] = useState([])
    const [filteredEmojiData, setFilteredEmojiData] = useState([])
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        setEmojiData(data)
    }, [])

    const handleChange = e => {
        setSearchQuery(e.target.value)

        let newData = emojiData.filter(e => 
            e.title
            .concat(e.keywords)
            .toLowerCase()
            .indexOf(searchQuery.toLowerCase()) !== -1
        )

        setFilteredEmojiData(newData)
    }

    return (
        <div className="container">
            <h1>Emoji List</h1>
            <input 
                type="text" 
                name="search"
                placeholder="Search emoji" 
                onChange={handleChange}
            />
            <Container emojiData={searchQuery === "" ? emojiData : filteredEmojiData} />
        </div>
    )
}

export default App