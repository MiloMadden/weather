const axios = require('axios');

const getClima = async(lat, long)=>{
   
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=5773b5558053b5bfc24346177272558f&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}