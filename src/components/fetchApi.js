import axios from "axios";

const fetchApi = (title, media_type) => {

    const options = {
        method: 'GET',
        url: 'https://ott-details.p.rapidapi.com/getnew',
        params: {region: 'US', page: '1'},
        headers: {
          'x-rapidapi-host': 'ott-details.p.rapidapi.com',
          'x-rapidapi-key': '8657b07ca9msh547529f9ccfc302p16c55ajsnc1eb6babafea'
        }
    };

    try{
        const result = axios.request(options)
        return result
    }
    catch (error){
        console.error(error)
    }
}

export default fetchApi
