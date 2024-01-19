//Quitar mongoose de deno.json si el codigo no hace conexion a base de datos
export const typeDefs = `#graphql
type Query{
test:String!
}
type Mutation{
test:String!
}
`
//mandar segundo link deno deploy