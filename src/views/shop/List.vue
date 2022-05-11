<template>
  <div>
    <h2>shop 리스트</h2>
    <ul>
      <li v-for="item of items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      items: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/items`);
      this.items = res.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped></style>
