<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">Sobre</router-link>
      <router-link to="/courses">Cursos</router-link>
      <router-link to="/contact">Contato</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "assets/variables.scss";
@import url("https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400,500,700&display=swap");

.v-expansion-panel-content__wrap {
  margin: 0em 24px !important;
  padding: 0em 0px !important;
}
body {
  height: 100vh;
  width: 100vw;
}
#app {
  height: 100vh;
  font-family: "Source Code Pro", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $primary;
  text-align: center;
  padding: 0;
  margin: 0;
  z-index: "-2";
  background-color: $dark;
  .home {
    background: url("assets/back-code.jpg");
    background-size: cover;
    height: 100%;
    width: 100%;
    opacity: 0.18;
    z-index: 2;
    position: absolute;
    filter: blur(8px);
    top: 0;
  }
}

.secondary--page {
  background: url("assets/back-lamp.png");
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 6em;
  position: absolute;
  height: 80%;
  width: 70%;
  opacity: 0.18;
  z-index: 0;
  @media screen and (max-width: 500px) {
    z-index: -2;
  }
}

#nav {
  text-align: left;
  padding: 3em;
  z-index: 10;
  position: relative;
  a {
    color: white;
    font-size: 18px;
    margin: 0em 0.8em;
    &:hover {
      color: $primary;
    }
    &.router-link-exact-active {
      border-bottom: 3px solid $primary;
    }
    @media screen and (max-width: 500px) {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 500px) {
    padding: 1em;
    text-align: center;
  }
}

a {
  text-decoration: none;
}

.theme--light {
  &.v-label {
    left: 0 !important;
  }
}
.row {
  margin: 0 !important;
}

::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>
