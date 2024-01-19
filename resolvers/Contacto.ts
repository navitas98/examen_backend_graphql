import { GetPais } from "../API/getPaishora.ts";
import { ContactoModelType } from "../DB/Contacto.ts";

export const Contacto={
    pais:async(parent:ContactoModelType)=>{
        const datos=await GetPais(parent.telefono);
        return datos.pais;
    }, 
    /*hora_actual:async(parent:ContactoModelType)=>{
        const hora=await GetHoraPais(parent)
    }
    //No logro obtener la capital de la APIREST, mi idea era con la capital obtenida de este link https://api.api-ninjas.com/v1/country?name=(GetPais.pais), obtenia la capital
    //Con la capital me quedaria hacer un nuevo fetch para obtener la hora a traves del siguiente link https://api.api-ninjas.com/v1/worldtime?city=(con el dato de la capital)
    */
}