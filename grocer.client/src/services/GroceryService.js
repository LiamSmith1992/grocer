import { grocerApi } from "./AxiosService"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
class GroceryService {

  async getItems() {
    const res = await grocerApi.get('/list')
    AppState.groceryItems = res.data
    logger.log(res.data)
  }


  async searchItem(query) {
    const res = await grocerApi.get('/search', { params: { q: query } })
    logger.log(res.data)
    AppState.foundItem = res.data
  }

}

export const groceryService = new GroceryService()