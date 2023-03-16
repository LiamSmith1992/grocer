import { grocerApi } from "./AxiosService"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
class GroceryService {



  async getItems() {
    const res = await grocerApi.get('/list')
    AppState.groceryItems = res.data
    logger.log(res.data)
  }

}

export const groceryService = new GroceryService()