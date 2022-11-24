<template>
  <nav id="nav1" class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="" href="#">PS.</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 flex-navbar">
          <li class="nav-item nav-margin-home">
            <router-link to="/" class="nav-link active navbar-text">Home</router-link>
          </li>
          <li class="nav-item nav-margin-home">
            <router-link to="/about" class="nav-link active navbar-text">Portfolio</router-link>
          </li>
          <li class="nav-item nav-margin-home">
            <router-link to="/about" class="nav-link active navbar-text">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: unset;
}

nav a.router-link-exact-active {
  color: #42b983;
}
#nav1 {
  background: #212121;
  color: white !important;
}
.navbar-text {
  color: white !important;
}
.flex-navbar {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  font-weight: bold;
}
.nav-margin-home {
  margin-right: 20px;
}
</style>
