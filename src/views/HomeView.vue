<template>
  <div class="home">
    <FirstnameHome />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import FirstnameHome from "@/components/FirstnameHome.vue";
@Options({
  components: {
    HelloWorld,
    FirstnameHome,
  },
})
export default class HomeView extends Vue {}
</script>
