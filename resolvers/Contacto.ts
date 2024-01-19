import { GetPais } from "../API/getPaishora.ts";
import { ContactoModelType } from "../DB/Contacto.ts";

export const Contacto={
    pais:async(parent:ContactoModelType)=>{
        const datos=await GetPais(parent.telefono);
        return "España";
    }, 
}