//Quitar mongoose de deno.json si el codigo no hace conexion a base de datos
export const typeDefs = `#graphql
type Contacto{
    id:ID!
    nombre:String!
    apellido:String!
    telefono:String!
}
type Query{
test:String!
getContact(id:ID!):Contacto!
getContacts:[Contacto!]!
}
type Mutation{
    nuevoContacto(nombre:String!, apellido:String!, telefono:String!):Contacto!
    deleteContact(id:ID!):Boolean
    updateContact(id:ID!, nombre:String,  telefono:String):Contacto!
    
}
`
