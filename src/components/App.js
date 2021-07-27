import React, { useState, useEffect } from "react"

const dogUrl = "https://dog.ceo/api/breeds/image/random"

function App(){
    const [ dogImage, setDogImage ] = useState(null)

    useEffect(() => {
        fetch(dogUrl)
        .then(res => res.json())
        .then(dog => setDogImage(dog.message))
    }, [])

    if (!dogImage) {
        return <p>Loading...</p>
    }


    return (
        <div>
            <img src={dogImage} alt="A Random Dog"/>
        </div>
    )
}

export default App
