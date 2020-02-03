<template>
  <div>
    <div class="secondary--page" />
    <v-row class="courses-detail--description">
      <v-col cols="12" md="4" sm="12">
        <div class="courses-detail--description--title">
          <v-btn tile :class="`button button-${coursesData.type}`">
            <img :src="require(`../assets/${coursesData.icon}.svg`)" />
            <span>{{ coursesData.name }}</span>
          </v-btn>
        </div>
        <div class="courses-detail--description--text divider">
          <h2 class="text--light">Por que estudar {{ coursesData.name }}?</h2>
          <h4>{{ coursesData.whyStudy }}</h4>
        </div>
      </v-col>
      <v-col cols="12" md="7" sm="12" class="courses-detail-list">
        <div class="courses-detail-list--title">
          <h2>Nossos cursos</h2>
        </div>
        <div class="courses-detail-list--items">
          <v-expansion-panels :accordion="true">
            <v-expansion-panel
              v-for="(mainCourse, index) in coursesData.mainTypeCourses"
              :key="index"
            >
              <v-expansion-panel-header disable-icon-rotate
                >{{ mainCourse.career }}
                <template v-slot:actions>
                  <v-icon color="error"></v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content
                v-for="(course, index) in mainCourse.courses"
                :key="index"
              >
                <img src="../assets/yin-yang.svg" alt="" />
                <span>{{ course.name }}</span>
                <a :href="course.linkMenu" target="_blank">Baixar ementa</a>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { modality } from "../mock/courses.js";
export default {
  data: () => ({
    coursesData: "",
    dialog: true
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
    border-right: 1px solid red;
    display: flex;
    padding-left: 4%;
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
      &-data-science {
        background-color: $dark-red !important;
      }
      &-data-analytics {
        background-color: $dark-blue !important;
      }
      &:hover {
        cursor: inherit;
      }
    }
    &--text {
      padding-top: 10%;
      h2 {
        color: $light;
        padding-right: 3em;
        padding-bottom: 3%;
        font-weight: bold;
      }
      h4 {
        color: $light;
        font-weight: normal;
        line-height: 1.7em;
      }
    }
  }
  &-list {
    &--title {
      color: white;
    }
    &--items {
      max-height: 450px;
      overflow-y: auto;
      padding-top: 4em;
      .v-expansion-panel {
        background-color: transparent !important;
        color: white;
        border: 1px solid $grey;
        margin: 1em;
        border-radius: 8px;
        &-header {
          color: $primary;
          font-size: 20px;
          text-transform: uppercase;
          font-weight: bold;
          @media screen and (max-width: 500px) {
            font-size: 15px;
          }
        }
        &-content {
          width: 100%;
          color: white;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          
          img {
            width: 16px;
            margin-right: 0.5em;
          }
          a {
            float: right;
            color: white;
            font-size: 12px;
            text-transform: uppercase;
            &:hover {
              text-decoration: underline;
              cursor: pointer; 
            }
            @media screen and (max-width: 500px) {
              display: block;
              float: none;
              border: 1px solid $primary;
              border-radius: 8px;
              padding: 8px;              
              text-align: center;
              margin-top: 0.5em;
            }
          }
          @media screen and (max-width: 500px) {
            font-size: 13px;
          }
        }
      }
    }
  }
}
.divider {
  border-right: 1px solid $grey;
  padding-right: 1em;
}
</style>
