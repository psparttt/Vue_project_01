<template>
  <div id="homepage">
    <div class="row">
      <div class="col-4 height-row">
        <div id="padding-name">
          <h1 class="font-left">{{ profile.surName }}</h1>
          <h1 class="margin-left font-left">
            {{ profile.lartName }}
            <p class="text-warning">.</p>
          </h1>
          <h1 class="text-warning font-left">___</h1>
          <h6 class="font-left">Instragram |</h6>
          <h6 class="font-left">Facebook |</h6>
          <button type="button" @click="$router.push('about')" class="btn btn-outline-warning font-left btn-contact">
            CONTACT ME
          </button>
        </div>
      </div>
      <div class="col-4">
        <img class="height-row" src="./517-5176868_david-beckham-png.png" alt="" />
      </div>
      <div class="col-4 height-row">
        <div id="padding-name">
          <h6 class="text-warning font-left">Introduction</h6>
          <h1 class="font-left">{{ profile.position }}</h1>
          <h1 class="font-left">Developer</h1>
          <h6 class="text-warning font-left">Learnmore</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueProject01HomePage",
  created() {
    console.log(this.nickName);
  },
  props: {
    nickName: {
      String,
    },
    profile: {
      Array,
    },
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
#homepage {
  height: 550px;
  background: #212121;
}

h1,
h6 {
  color: white;
  font-weight: bold;
}
.font-left {
  display: flex;
  justify-content: flex-start;
}
#padding-name {
  padding: 50px;
}
.margin-left {
  margin-left: 5px;
}
.btn-contact {
  margin-top: 20px;
}

.height-row {
  height: 500px;
}
.under-line {
  text-decoration: none;
}
</style>
