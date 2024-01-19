type capital={
    capital:string
   
}
export const GetCapital=async(pais:string):Promise<capital>=>{
    const url=`https://api.api-ninjas.com/v1/country?name=${pais}`;
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
       capital:data.capital
       
    }
}