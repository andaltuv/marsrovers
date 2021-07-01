
export const GetRover = async(roverName) => {


    const url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${encodeURI(roverName)}/?api_key=YOUR_API_KEY`;
  
    const response = await fetch( url );
    const { photo_manifest } = await response.json();
    return photo_manifest;

}
