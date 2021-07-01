import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {

    return(
        <header className="py-7 bg-gray-900">

            <nav className="container mx-auto grid grid-cols-4 gap-4">

                <div className="text-left">
                    <img src="../assets/logo/nasaRoverslogo.png"/>
                </div>

                <div className="col-span-3 text-white text-right">
                    <Link className="mr-4" to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>

            </nav>

        </header>
    )

}