const axios = require('axios');

const getLugarLatLong = async(direccion)=>{
    
    const lugar = encodeURI(direccion);
    console.log(lugar);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${lugar}`,
        headers: {'x-rapidapi-key': 'a6318dfa76mshc55ee954867ac74p17b4b0jsnb995545adbcd'}
    });

    const response = await instance.get();

    if(response.data.Results.length === 0){
        throw new Error(`No se encontraron resultados para ${direccion}`)
    }

    const data = response.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const long = data.lon;
    const pais = data.c;

    return {
        dir, 
        pais,
        lat, 
        long
    }

}

module.exports = {
    getLugarLatLong
}

/*
    const getLugarLatLong = (direccion)=>{
    
    const lugar = encodeURI(direccion);
    console.log(lugar);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${lugar}`,
        headers: {'x-rapidapi-key': 'a6318dfa76mshc55ee954867ac74p17b4b0jsnb995545adbcd'}
    });

    instance.get()
            .then(resp =>{
                console.log(resp.data.Results[0])
            })
            .catch(err =>{
                console.log(err)
            })

    return {
        direccion, 
        lat, 
        long
    }

}
*/