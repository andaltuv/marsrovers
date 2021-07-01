import React from 'react';
import { Link } from 'react-router-dom';

export const SpiritCard = () => {
    return(
        <div className="h-80 bg-cover" style={{backgroundImage:`url(./assets/rovers/spiritRover.jpg)`}}>
        <div className="h-full bg-black bg-opacity-50">
           <div className="h-full p-5">
               <Link 
               to="./rover/spirit">
                   <div className="border border-white w-full h-full">
                      <p className="text-xl text-white font-bold pt-60">Spirit Rover</p>                  
                   </div>
               </Link>
           </div>
        </div>
   </div>
    )
}