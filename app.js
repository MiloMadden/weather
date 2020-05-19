
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs')
                    .options({
                        direccion:{
                            alias: 'd', 
                            desc: 'Direccion de la ciudad para obtener el clima', 
                            demand: true
                        }
                    }).argv;

//console.log(argv);
//console.log(argv.direccion);

/*
lugar.getLugarLatLong(argv.direccion)
                    .then(res=>{
                        //console.log(res)
                        clima.getClima(res.lat, res.long)
                    })
                    .catch(e=>{
                        console.log(e)
                    });
*/
const getInfo = async(dir)=>{

    try {
        const locacion = await lugar.getLugarLatLong(dir);

        const temp = await clima.getClima(locacion.lat, locacion.long);
    
        return {
            ciudad: dir,
            pais: locacion.pais,
            temperatura: temp + ' Grados',
            info: locacion 
        }
    } catch (error) {
        return `No se pudo determinar el clima de ${dir}`
    }


}

getInfo(argv.direccion)
        .then(r=>{
            console.log(r)
        })
        .catch(e=>{
            console.log(e)
        });




