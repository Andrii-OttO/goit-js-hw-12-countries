 const baseUrl = 'https://restcountries.com/v2/name/'
 
export default class ApiSearchCountrie{
    constructor(){
        this.searchQuery = '';
        }
    fetchCountrie(){
        let url =`${baseUrl}${this.searchQuery}`
        return fetch(url)
        .then(response=>response.json())
        }
    get query (){
        return this.searchQuery;
    }
    set query(newQuery){
        this.searchQuery = newQuery;
    }
     
}

//  export default function searchCountry(inputValue){
//     fetch(`${baseUrl}${inputValue}`)
//     .then(result => {
        
//         return result.json()
        
//     })
//     //.catch(error)
// }





