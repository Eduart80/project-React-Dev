import { NetworkError, DataError } from "../Components/ErrorClass/ErrorHandel";

// get all
export async function fetchALLData() {
    let data
    try{
    const respond = await fetch(`https://restcountries.com/v3.1/all?fields=name,capital,region,languages,flags,population,currencies`);
         data = await respond.json()
    }catch(e){
        if (e instanceof NetworkError) {
                console.error('Network error:', e.message);
            } else if (e instanceof DataError) {
                console.error('Data error:', e.message);
            } else {
                console.error('Unknown error:', e);
            }
    }
    return data;
}