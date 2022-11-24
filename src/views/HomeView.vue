<template>
  <div class="home">
    <FirstnameHome />
    <WorkExperian />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import FirstnameHome from "@/components/FirstnameHome.vue";
import WorkExperian from "@/components/WorkExperian.vue";
@Options({
  components: {
    HelloWorld,
    FirstnameHome,
    WorkExperian,
  },
})
export default class HomeView extends Vue {}
</script>
