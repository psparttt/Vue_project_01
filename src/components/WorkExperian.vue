<template >
  <div class="background-area">
    <font-awesome-icon icon="fa-regular fa-star" />
    <h1 class="text-warning text-bold text-padding">About Me</h1>
    <h6 class="text-white text-bold">I always like to learn new things.The skills that are available </h6>
    <h6 class="text-white text-bold">now are Getting the job done in a timely manner and i can solve</h6>
    <h6 class="text-white text-bold">immediate problems as well.</h6>
    <h6 class="text-warning text-bold mt-20">What I'm good at</h6>
    <div class="box-flex">
        <div class="box-flex bg-box">
            <i class="fa-brands fa-html5 text-white icon-size"></i>
           <i class="fa-brands fa-js text-white icon-size ml-5"></i>
           <i class="fa-brands fa-css3-alt text-white icon-size ml-5 "></i>
           <i class="fa-brands fa-python text-white icon-size ml-5"></i>
           <i class="fa-brands fa-vuejs text-white icon-size ml-5"></i>
        
      </div>
      
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
  padding-top: 50px;
}
.bg-box {
  border-radius: 10px;
  margin-left: 40px;
  width: 400px;
  height: 100px;
  background: #212121;
}
.box-flex {
  margin: 0px 50px 0px 50px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
}
.mt-20{
  margin-top: 20px;
}
.ml-5{
  margin-left: 5px;
}
.icon-size{
  width: 50px;
  height: 50px;
}
.pd-top-5{
  padding-top: 5px;
}
</style>
