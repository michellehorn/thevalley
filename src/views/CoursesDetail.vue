<template>
  <div>
    <div class="secondary--page" />
    <v-row class="courses-detail--description">
      <v-col cols="12" md="5" sm="12">
        <div class="courses-detail--description--title">
          <v-btn tile :class="`button button-${coursesData.type}`">
            <img :src="require(`../assets/${coursesData.icon}.svg`)" />
            <span>{{ coursesData.name }}</span>
          </v-btn>
        </div>
        <div class="courses-detail--description--text divider">
          <h3 class="text--light">Por que estudar {{ coursesData.name }}?</h3>
          <h5>{{ coursesData.whyStudy }}</h5>
          <h3>
            {{ coursesData.work_market ? "E o mercado de trabalho?" : "" }}
          </h3>
          <h5>{{ coursesData.work_market ? coursesData.work_market : "" }}</h5>
        </div>
      </v-col>
      <v-col cols="12" md="6" sm="12" class="courses-detail-list">
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
                <div
                  class="v-expansion-panel-content-item"
                  @click.stop="loadModalData(course)"
                >
                  <img src="../assets/yin-yang.svg" alt="" />
                  <a class="title">{{ course.name }}</a>
                </div>
              </v-expansion-panel-content>

              <v-dialog v-model="dialog2" max-width="600">
                <v-card>
                  <div>
                    <h4
                      title="Fechar"
                      class="text--light close-btn"
                      @click="dialog2 = false"
                    >
                      x
                    </h4>
                  </div>
                  <div class="headline">
                    <v-card-title>{{ selectedCourse.name }}</v-card-title>
                    <h5 class="text--light" v-if="selectedCourse.subtext">({{ selectedCourse.subtext }})</h5>
                    <br>
                    <h5 class="text--light" v-if="selectedCourse.prereq">Pré requisitos: {{selectedCourse.prereq}}</h5>
                  </div>
                  <v-card-text class="course-data">
                    <v-layout class="course-data-main">
                      <v-flex md6 sm12 style="text-align: center">
                        <h1 class="text--light">{{ selectedCourse.time }}h</h1>
                        <h3>aulas presenciais</h3>
                      </v-flex>
                      <v-flex md6 sm12 style="text-align: center">
                        <h1 class="text--light">
                          {{ selectedCourse.projects }}
                        </h1>
                        <h3>projetos desenvolvidos</h3>
                      </v-flex>
                    </v-layout>
                    <v-layout class="course-data-menu">
                      <a
                        target="_blank"
                        class="text--light"
                        :href="
                          selectedCourse.linkMenu ? selectedCourse.linkMenu : ''
                        "
                      >
                        {{
                          selectedCourse.linkMenu
                            ? "BAIXAR EMENTA"
                            : "Ementa indisponível"
                        }}
                        <img
                          v-if="selectedCourse.linkMenu"
                          src="../assets/icon-download.svg"
                        />
                      </a>
                    </v-layout>
                    <div class="course-data-next__class">
                      <h2 class="text--light">Próximas turmas</h2>
                      <div>
                        <table>
                          <tr
                            v-for="(t, index) in selectedCourse.nextClasses"
                            :key="index"
                          >
                            <td class="text--light">{{ t.date }} |</td>
                            <td class="text--light">{{ t.city }}</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div class="course-data-buy">
                      <div>
                        <h1 class="text--light">
                          R${{ selectedCourse.price }}
                        </h1>
                        <h5>em até {{ selectedCourse.paymentTimes }}x</h5>
                        <a :href="selectedCourse.linkToBuy"
                          ><v-btn outlined>COMPRAR</v-btn></a
                        >
                      </div>
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
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
    dialog: false,
    dialog2: false,
    selectedCourse: {}
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
    },
    loadModalData(data) {
      console.log(data); // eslint-disable-line
      this.dialog2 = true;
      this.selectedCourse = data;
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
    max-height: 300px;
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
      &-mobile {
        background-color: $dark-blue !important;
      }
      &:hover {
        cursor: inherit;
      }
    }
    &--text {
      padding-top: 7%;
      h3 {
        padding-top: 2%;
        color: $light;
        padding-right: 3em;
        padding-bottom: 3%;
        font-weight: bold;
      }
      h5 {
        color: $light;
        font-weight: normal;
      }
    }
  }
  &-list {
    &--title {
      color: white;
    }
    &--items {
      max-height: 450px;
      overflow-y: scroll;
      margin-top: 2em;
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
          &-item {
            display: flex;
            padding: 15px 0px;
            width: 100%;
          }
          &__wrap {
            padding: 0 !important;
          }
          img {
            width: 16px;
            margin-right: 0.5em;
          }
          a.title {
            display: block;
          }
          @media screen and (max-width: 500px) {
            font-size: 13px;
          }
          &:hover {
            background: #ffffff34;
            display: flex;
            cursor: pointer;
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
.v-dialog__container {
  display: unset;
}

.v-dialog.v-dialog--active {
  max-width: 700px !important;
  width: 700px !important;
  .v-card.theme--light {
    padding: 1em;
    background: $dark-green;
    .headline {
      padding-bottom: 1em;
      .v-card__title {
        color: $primary;
        display: flex;
        justify-content: center;
        font-size: 28px;
        text-transform: uppercase;
        font-weight: bold;
      }
      h5 {
        text-align: center;
      }
    }
  }
}

.text--light {
  color: $light;
}
h4.close-btn {
  text-align: right;
  &:hover {
    cursor: pointer;
  }
}

.course-data {
  &-main {
    margin: 2.5em 0 2em;
    h1 {
      font-size: 55px;
      padding-bottom: 20px;
    }
    h3 {
      font-weight: normal;
      color: $primary;
    }
  }
  &-menu {
    display: flex;
    justify-content: center;
    margin-bottom: 2em;
    a {
      img {
        max-width: 16px;
        color: white;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &-buy {
    display: flex;
    justify-content: center;
    h5 {
      color: $primary;
      text-align: center;
    }
    .v-btn {
      margin-top: 1em;
      color: $primary;
    }
  }
  &-next__class {
    margin: 1em 0 3em;
    div,
    h2 {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
