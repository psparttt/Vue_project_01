<template>
  <div>
    <h1>Api Page</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "VueProject01ApiPage",

  data() {
    return {
      data: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let apiUrl = "https://pokeapi.co/api/v2/pokemon/1";
      axios.get(apiUrl).then(function (response) {
        console.log(response.data);
        this.data = response.data;
        return response.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
