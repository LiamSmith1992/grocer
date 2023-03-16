import Axios from 'axios'
import { api_key, baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})



export const grocerApi = Axios.create({

  baseURL: 'https://api.nal.usda.gov/fdc/v1/foods',
  params: {
    api_key: api_key
  }
});


