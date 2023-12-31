import React, { useEffect, useState } from "react";

import axios from "axios";

import "./App.css"

const App = () => {
    const [joke, setJoke] = useState("")//usestate for joke state
    const [load, setLoad] = useState(false)//usestate for loading state

    //useEffect to trigger getJoke function
    useEffect(() => {
        getJoke()
    }, [])

    //function to getJoke
    const getJoke = async () => {
        setLoad(true)
        try {
            const url = " https://v2.jokeapi.dev/joke/Any?type=single"
            const response = await axios.request(url)
            setLoad(false)
            const joke = await response.data.joke
            setJoke(joke)
        } catch (err) {
            if (err) {
                setJoke("Network error ☹️!")
                setLoad(false)
            }
        }
    }

    //another joke function
    const anotherJoke = () => {
        getJoke()
    }

    return (
        <>
            <div id="main">
                <div className="card">
                    <p>{load===true? "loading..." : joke}</p>
                </div>
                <button onClick={anotherJoke}>{load === true ?
                    <>
                        <div class="spinner-border text-light" role="status">
                            <span class="sr-only"></span>
                        </div>
                    </>
                : "New Joke"}</button>
            </div>
        </>
    )
}

export default App;