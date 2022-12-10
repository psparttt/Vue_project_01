<template>
  <div class="home">
    <FirstnameHome :nickName="nickName" :profile="profile" />
    <WorkExperian />
  </div>
</template>

<script>
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
export default class HomeView extends Vue {
  data() {
    return {
      nickName: "ploy",
      profile: {
        surName: "Pongsapus",
        lartName: "Subjeerakul",
        position: "Font-END",
      },
    };
  }
}
</script>
