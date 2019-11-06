import axios from "axios";
import querystring from "querystring";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  takePicture: async function (req) {
    let result;
    const data = new FormData()
  data.append('file', req)
     await axios({
       method:"POST",
       url:"https://api.taggun.io/api/receipt/v1/verbose/file",data,
       headers:{
         "Content-Type": "application/x-www-form-urlencoded",
         "apikey":process.env.REACT_APP_TAGGUN_API_KEY,
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
        url: "https://api.spoonacular.com/food/detect?apiKey=" + process.env.REACT_APP_SPOON_API_KEY, 
        data: querystring.stringify({
        text:result
        })
      })
   }
};
