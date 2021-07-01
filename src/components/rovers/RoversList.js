import React from 'react';
import { Link } from 'react-router-dom';
import { CuriosityCard } from './cards/CuriosityCard';
import { OpportuniyCard } from './cards/OpportunityCard';
import { SpiritCard } from './cards/SpiritCard';

export const RoversLists = () => {
    
    return(
        <div className="container mx-auto grid grid-cols-3 gap-10 my-12">
            < CuriosityCard />
            < OpportuniyCard />
            < SpiritCard />
        </div>
    )


}