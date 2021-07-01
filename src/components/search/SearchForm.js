import React from 'react';

export const SearchForm = () => {


    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Estan buscando");
    }


    return(
        <div className="container mx-auto grid grid-cols-2 mt-20">

            <div>

                <div className="align-center">

                    <h2 className="text-xl mb-5 text-white">Select rover to see latest photo taken</h2>

                    <form onSubmit={handleSearch}>
                        <select className="p-2 text-gray">
                            <option value="none">Select Rover</option>
                            <option value="curiosity">Rover Curiosity</option>
                            <option value="opportunity">Rover Opportunity</option>
                            <option value="spirit">Rover Spirit</option>
                        </select>
                        <button className="bg-red-400 p-2">See latest photo</button>
                    </form>
                </div>

            </div>

        </div>
    )

}