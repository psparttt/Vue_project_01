<template>
  <div class="background-area">
    <h1 class="text-warning text-bold text-padding">About Me</h1>
    <h6 class="text-white text-bold">I always like to learn new things.The skills that are available</h6>
    <h6 class="text-white text-bold">now are Getting the job done in a timely manner and i can solve</h6>
    <h6 class="text-white text-bold">immediate problems as well.</h6>
    <div class="box-flex">
      <div class="bg-box">
        <h2>test</h2>
      </div>
      <div class="bg-box"></div>
      <div class="bg-box"></div>
      <div class="bg-box"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueProject01WorkExperian",

  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
.background-area {
  height: 500px;
  background: #292929;
}
.text-bold {
  font-weight: bold;
}
.text-padding {
  padding-top: 70px;
}
.bg-box {
  border-radius: 5px;
  margin-left: 25px;
  width: 200px;
  height: 200px;
  background: #212121;
}
.box-flex {
  margin: 0px 50px 0px 50px;
  padding-top: 30px;
  display: flex;
  justify-content: center;
}
</style>
