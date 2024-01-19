import { GraphQLError } from "graphql";
import { ContactoModel, ContactoModelType } from "../DB/Contacto.ts";

export const Query={
    getContact:async(_:unknown,args:{id:string}):Promise<ContactoModelType>=>{
        const Contacto=await ContactoModel.findById(args.id);
        if(!Contacto){throw new GraphQLError(`El id ${args.id} del contacto no existe`)}
        return Contacto;
    },
    getContacts:async():Promise<ContactoModelType[]>=>{
        const contacto=await ContactoModel.find().exec();
        return contacto;
    }
}