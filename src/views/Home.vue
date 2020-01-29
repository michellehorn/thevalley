<template>
  <div>
    <div class="home" />
    <div class="main-page">
      <img src="../../src/assets/logo.png" />
      <div class="main-page--subtitle">
        <span>Comece a construção da sua carreira em </span>tech<span>
          hoje mesmo!</span
        >
      </div>
      <div class="main-page--topics">
        <v-btn class="main-page--topics--button" outlined>
          Cursos presenciais
          <v-icon right dark>done</v-icon>
        </v-btn>
        <v-btn class="main-page--topics--button" outlined>
          Ementas criadas por especialistas
          <v-icon right dark>done</v-icon>
        </v-btn>
        <v-btn class="main-page--topics--button" outlined>
          Conexão com empresas
          <v-icon right dark>done</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>

<style lang="scss">
@import "../assets/variables.scss";

.main-page {
  &--subtitle {
    padding-top: 2em;
    color: $primary;
    font-size: 22px;
    font-weight: bold;
    span {
      color: white;
    }
    @media screen and (max-width: 500px) {
      font-size: 15px;
    }
  }
  &--topics {
    margin-top: 5em;
    &--button.v-btn.theme--light {
      color: $primary;
      margin: 0.5em;
      &:hover {
        cursor: inherit;
      }
      @media screen and (max-width: 500px) {
        height: 20px !important;
        font-size: 10px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    padding-top: 4em;
  }
}
img {
  padding-top: 5%;
  @media screen and (max-width: 500px) {
    width: 250px;
    padding-top: 25%;
  }
}
</style>
