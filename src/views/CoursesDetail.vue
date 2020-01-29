<template>
  <div>
    <div class="secondary--page" />
    <v-row class="courses-detail--description">
      <v-col cols="12" md="4" sm="12">
        <div>
          <v-btn tile :class="`button button-${coursesData.type}`">
            <img :src="require(`../assets/${coursesData.icon}.svg`)" />
            <span>{{ coursesData.name }}</span>
          </v-btn>
        </div>
        <div class="courses-detail--description--text">
          <h2 class="text--light">Por que estudar 
{{coursesData.name}}?</h2>
          <h4>{{coursesData.whyStudy}}</h4>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { modality } from "../mock/courses.js";
export default {
  data: () => ({
    coursesData: ""
  }),
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.coursesData = modality.filter(el => {
        return el.type === this.$route.params.name;
      });
      this.coursesData = this.coursesData[0];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.courses-detail {
  &--description {
    display: flex;
    padding: 7%;
    text-align: left;

    .button {
      color: white !important;
      height: 48px !important;
      padding: 0em 2em !important;
      font-size: 20px;
      img {
        width: 30px;
        padding-top: 0;
        padding-right: 0.3em;
      }
      &-code {
        background-color: $dark-green !important;
      }
    }
    &--text {
        padding-top: 10%;
        h2 {
            color: $light;
            padding-bottom: 5%;
            font-weight: bold;
        }
        h4 {
            color: $light;
            padding-bottom: 5%;
            font-weight: normal;
            line-height: 1.7em;
        }
    }
  }
}
</style>
