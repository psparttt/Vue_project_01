<template>
  <div id="homepage">
    <div class="row">
      <div class="col-4">
        <div id="padding-name">
          <h2>Pongsapus</h2>
          <h2 class="margin-left">Subjeerakul.</h2>
        </div>
      </div>
      <div class="col-4"></div>
      <div class="col-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueProject01HomePage",

  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
#homepage {
  height: 500px;
  background: #212121;
}
h2 {
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
}
#padding-name {
  padding: 50px;
}
.margin-left {
  margin-left: 5px;
}
</style>
