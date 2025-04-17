function parseUplink(device, payload)
{
    // Obtener payload como JSON
    const jsonPayload = payload.asJsonObject();
    Object.keys(jsonPayload).forEach(function(key){
        env.log(key,jsonPayload[key])
    })

    // No se puede deserializar el payload como json, salir.
    if (!jsonPayload) { return; }

    // Procesar JSON de EZE GEN1 (hasta 200 registros por sensor por call)


    //----------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------

        //variables SW Resina ABAJO
        var h2o_1 = device.endpoints.byAddress(1);
        var h2o_2 = device.endpoints.byAddress(2);
        var h2o_3 = device.endpoints.byAddress(3);
        var h2o_4 = device.endpoints.byAddress(4);
        var h2o_5 = device.endpoints.byAddress(5);

        var tiempoUnix = jsonPayload.timestamp;
        var fecha = new Date(tiempoUnix * 1000);
        var timestamp = fecha.toISOString();
        env.log("LA FECHA ES ----->   ",timestamp);

/*-------------------------------------------------------------------------------------------------------------------

SCRIPT H2O STM SCRIPT H2O STM SCRIPT H2O STM SCRIPT H2O STM SCRIPT H2O STM SCRIPT H2O STM SCRIPT H2O STM SCRIPT H2O STM 

-------------------------------------------------------------------------------------------------------------------*/
// Sentencia NODE-RED Para todos los endpoints


if (jsonPayload.ser == "RUT240"){
            const datos = jsonPayload;
            var data = jsonPayload.val;

            const datosSeparados = jsonPayload.val.split(',');
            datosSeparados.forEach(dato => {
            env.log(dato.trim());
            });
            for (let i = 0; i < datosSeparados.length; i++) {
                    env.log("Valor  --> ",[i],"--->  ",datosSeparados[i]);
            }
            var dato1 =parseInt(datosSeparados[0]);
            var dato2 =parseInt(datosSeparados[1]);
            var dato3 =parseInt(datosSeparados[2]);
            var dato4 =parseInt(datosSeparados[3]);
            var dato5 =parseInt(datosSeparados[4]);


            
          
            env.log("Time  --> ",timestamp);

            h2o_1.updateVolumeSensorStatus(dato1,timestamp);
            env.log("Valor 1 --> ",dato1);
            
            h2o_2.updateVolumeSensorStatus(dato2,timestamp);
            env.log("Valor 2 --> ",dato2);

            h2o_3.updateVolumeSensorStatus(dato3,timestamp);
            env.log("Valor 3 --> ",dato3);

            h2o_4.updateVolumeSensorStatus(dato4,timestamp);
            env.log("Valor 4 --> ",dato4);

            h2o_5.updateVolumeSensorStatus(dato5,timestamp);
            env.log("Valor 5 --> ",dato5);
             
                                                         
    }



  
}