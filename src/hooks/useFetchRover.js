import { useEffect, useState  } from "react";
import { GetRover } from "../helpers/getRover";

export const useFetchRover = ( roverName ) => {

    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect(()=> {

        GetRover(roverName)
        .then(rover => {
            setState({
                data:rover,
                loading:false
            })
        })

    }, [roverName]);

    return state;

}