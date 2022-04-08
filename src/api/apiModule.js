import axios from "axios";

const getWine = async () => {
    const response = await axios("https://api.spoonacular.com/food/wine/recommendation?apiKey=90d46b0752874ba588add2f6ad78619a&wine=merlot&number=10", {
    })
    
    console.log(response)
    return response['data']
}

// getWine()
// console.log("hh")

export const ApiModule = {
    getWine
}