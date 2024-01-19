//Quitar mongoose de deno.json si el codigo no hace conexion a base de datos
export const typeDefs = `#graphql
type Query{
test:String!
hola:String!
}
type Mutation{
test:String!
}
`