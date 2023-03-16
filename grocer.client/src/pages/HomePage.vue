<template>
  <form @submit.prevent="searchItem()">
    <input type="text" v-model="search.query">
    <button class="btn btn-info">search</button>
  </form>
</template>

<script>
import { onMounted, computed, reactive } from "vue";
import { AppState } from "../AppState";
import { groceryService } from "../services/GroceryService";
import { logger } from "../utils/Logger";

export default {
  setup() {
    const search = reactive({ query: '' })
    onMounted(() => {
      getItems()
    })


    async function getItems() {
      try {
        await groceryService.getItems()
      } catch (error) {
        logger.error(error.message)
      }
    }

    async function searchItem() {
      try {
        await groceryService.searchItem(search.query)
      } catch (error) {
        logger.error(error.message)
      }
    }


    return {
      items: computed(() => AppState.groceryItems),
      search,
      searchItem


    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
