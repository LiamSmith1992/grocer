import { grocerApi } from "./AxiosService"
import { AppState } from "../AppState"
class GroceryService {



  async getItems() {
    const res = await grocerApi.get
    AppState.groceryItems = res.data
  }

}

export const groceryService = new GroceryService()