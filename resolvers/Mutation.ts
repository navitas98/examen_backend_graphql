import { GraphQLError } from "graphql";
import { ContactoModel, ContactoModelType } from "../DB/Contacto.ts";

export const Mutation={
    nuevoContacto:async(_:unknown,args:{nombre:string, apellido:string, telefono:string}):Promise<ContactoModelType>=>{
        const {nombre,apellido,telefono}=args;
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
    }
}
