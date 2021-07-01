
export const GetRover = async(roverName) => {


    const url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${encodeURI(roverName)}/?api_key=9WL5OMW5Q5TYWd4KzBEWD4cyhlahrtXacyCnIaPT`;
  
    const response = await fetch( url );
    const { photo_manifest } = await response.json();
    return photo_manifest;

}