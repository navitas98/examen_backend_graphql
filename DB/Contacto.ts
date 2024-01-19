import mongoose from "mongoose"
import { Contacto } from "../types.ts"

const Schema=mongoose.Schema;
const ContactoSchema=new Schema({
    nombre:String,
    apellido:String,
    telefono:String
});/*
ContactoSchema.path("telefono").validate(async function (value:string) {
        //Comprobamos si el telefono ya existe
        const exit=await ContactoModel.findOne({telefono:value});
        if(exit)return false;
        return true;
})*/
export type ContactoModelType=mongoose.Document&Omit<Contacto,"id">&{
    _id:mongoose.Types.ObjectId;
}
export const ContactoModel=mongoose.model<ContactoModelType>("Contacto",ContactoSchema);