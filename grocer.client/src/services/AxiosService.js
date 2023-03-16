import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})



export const grocerApi = Axios.create({
  method: 'GET',
  url: 'https://caterer-groceries-intel.p.rapidapi.com',
  params: {
    'X-RapidAPI-Key': 'b0b7d97ed4msh3e6792fa14ad15ep1faa5fjsnb0dd7b34faee',
    'X-RapidAPI-Host': 'caterer-groceries-intel.p.rapidapi.com'
  }
});

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});