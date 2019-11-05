import axios from "axios";
import querystring from "querystring";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  },
  
  takePicture: async function (req) {
    let result;
    const data = new FormData()
  data.append('file', req)
     await axios({
       method:"POST",
       url:"https://api.taggun.io/api/receipt/v1/verbose/file",data,
       headers:{
         "Content-Type": "application/x-www-form-urlencoded",
         "apikey":"ab7591d0fabe11e98bfadfb7eb1aa8b5",
         "processData": false,
         "contentType": false,
         "mimeType": "multipart/form-data"
       }      
       }).then((params)=> {
         result=params.data.text.text;
       })
       .catch((error)=>{
         console.log(error)
       })
       return axios( {
        method: 'post',
        headers:{
          "Content-Type":"application/x-www-form-urlencoded"
        },
        url: "https://api.spoonacular.com/food/detect?apiKey=58cfd4a9c5d74b4b8a81d26ef617114f", 
        data: querystring.stringify({
        text:result
        })
      })
   }
};
