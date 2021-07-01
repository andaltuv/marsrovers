import React from 'react';
import { RoversLists } from '../rovers/RoversList';
import { SearchForm } from '../search/SearchForm';


export const HomeScreen = () => {
    return(
        <>
        <div className="h-mrch bg-cover" style={{backgroundImage:`url(./assets/backgrounds/marsRoverBg.jpg)`}}>
            <div className="container mx-auto grid grid-cols-2 text-white">
                <div className="text-white">
                    <h1 className="text-4xl mb-4 mt-28">Welcome to Mars Rovers</h1>
                    <p>Mars rovers uses Nasa API to get data from 3 different rovers station on Mars, it also allows users to get the latest photo or photo by date of each rover</p>
                </div>
            </div>
            < SearchForm />
        </div>
        <div className="bg-gray-900 py-3 text-center">
            <h2 className="text-5xl text-white my-1">Select Rover</h2>
            < RoversLists />
        </div>
        </>
    )

}