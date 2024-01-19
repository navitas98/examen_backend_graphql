
import { GraphQLError } from "graphql";
import { ContactoModel, ContactoModelType } from "../DB/Contacto.ts";
import { GetPais } from "../API/getPaishora.ts";

export const Mutation={
    addContact:async(_:unknown,args:{nombre:string, apellido:string, telefono:string}):Promise<ContactoModelType>=>{
        const {nombre,apellido,telefono}=args;
        const is_valid=await GetPais(telefono);
        if(is_valid.valid===false){throw GraphQLError}{"El telefono tiene un error"}
        const Contacto={
            nombre,
            apellido,
            telefono
        }

        const nuevoContacto=await ContactoModel.create(Contacto);
        return nuevoContacto;
    },
   deleteContact:async(_:unknown,args:{id:string}):Promise<boolean>=>{
        const contacto=await ContactoModel.findByIdAndDelete(args.id);
        if(!contacto){return false}else{
            return true;
        }
    },
    updateContact   :async(_:unknown,args:{id:string, nombre:string, telefono:string}):Promise<ContactoModelType>=>{
        const {id, nombre,telefono}=args;
        const contacto=await ContactoModel.findByIdAndUpdate(
            id, 
            {nombre, telefono},
            {new:true,runValidators:true}
        );
        if(!contacto){
            throw new GraphQLError(`No hemos encontrado ningun contacto con el id ${id}`,{extensions:{code:"Not found"}});            
        }
        return contacto;
    }
}
