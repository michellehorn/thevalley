<template>
  <div class="about">
    <div class="secondary--page" />
    <v-row class="about-page">
      <v-col
        col="12"
        md="4"
        sm="12"
        v-for="(item, index) in about"
        :key="index"
        class="badge"
      >
        <h1>{{ item.name }}</h1>
        <h3>{{ item.text }}</h3>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { aboutData } from "../mock/about.js";
export default {
  data: () => ({
    about: aboutData
  })
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
.about {
  .secondary--page {
    z-index: 1;
  }
  .about-page {
    padding: 7%;
    color: $light;
    .badge {
      padding: 0em 2em;
      border-right: 1px solid $grey;
      &:last-child {
        border-right: none;
      }
      @media screen and (max-width: 500px) {
        border-right: none;
        margin: 1.5em 0em;
      }
    }
    h1 {
      padding-bottom: 1em;
      text-shadow: 1px 1px 5px $grey;
      @media screen and (max-width: 500px) {
        font-size: 25px;
      }
    }
    h3 {
      text-align: left;
      @media screen and (max-width: 500px) {
        font-size: 15px;
      }
    }
  }
}
</style>
