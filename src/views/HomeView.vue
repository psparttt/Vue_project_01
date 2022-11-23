<template>
  <div class="home">
    <HomePage />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import HomePage from "@/components/HomePage.vue";
@Options({
  components: {
    HelloWorld,
    HomePage,
  },
})
export default class HomeView extends Vue {}
</script>
