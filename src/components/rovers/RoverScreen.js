import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchRover } from '../../hooks/useFetchRover';

export const RoverScreen = () => {

    const { roverName } = useParams();
    
    const { data: rover, loading} = useFetchRover( roverName );
 
    const { landing_date, launch_date, max_date, max_sol, name, status, total_photos } = rover

    return(
        <>
   
        <div className="container mx-auto grid grid-cols-4 gap-10 mt-20">

            <div className="bg-white shadow-xl text-center my-10 p-5 h-auto object-center">
                <h1 className="text-4xl mb-4">{ name }</h1>
                <label className="font-bold">Status:</label>
                <p className="text-gray">{ status }</p>
                <label className="font-bold">Launch Date:</label>
                <p>{ launch_date }</p>
                <label className="font-bold">Launch Date:</label>
                <p>{ landing_date } </p>
                <label className="font-bold">Total Photos Taken:</label>
                <p>{ total_photos }</p>
                <labe className="font-bold mt-12">Patch:</labe>
                <img className="ml-14 mt-2" src={`../assets/rovers/${roverName}-patch.png`} />
            </div>

            <div className="col-span-3 h-mrch bg-cover" style={{backgroundImage:`url(../assets/rovers/${roverName}-screen.jpg)`}}>
                
            </div>

        </div>
        </>
    )

}