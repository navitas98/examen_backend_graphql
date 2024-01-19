type PaisValid={
    valid:boolean,
    pais:string
}
export const GetPais=async(telefono:string):Promise<PaisValid>=>{
    const url=`https://api.api-ninjas.com/v1/validatephone?number=${telefono}`;
    const APiKey=Deno.env.get("API_KEY");
    if (!APiKey) {
        throw new Error("Please provide a APIKEY connection string");
      }
    const response= await fetch(url,{
        method:"GET",
        headers:{'X-Api-Key': APiKey,
        contentType:"application/json'"
    }
    })  
    if(response.status!==200)throw new Error("Error al hacer la peticion")
    const data=await response.json();
    

    return {
        valid:data.is_valid,
        pais:data.country
    }
}