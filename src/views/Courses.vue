<template>
  <v-layout class="courses-page">
    <div class="secondary--page" />
    <v-row class="courses">
      <v-col md="6" sm="12" v-for="(course, index) in courses" :key="index" class="align-cards">
        <router-link :to="`courses/${course.class}`">
          <v-card
            raised
            tile
            class="courses--item"
            :class="`courses--item--${course.class}`"
          >
            <img
              :src="require(`../assets/${course.icon}.svg`)"
              :alt="course.name"
            />
            <span>{{ course.name }}</span>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-layout>
</template>
<script>
export default {
  data: () => ({
    courses: [
      {
        name: "Programação",
        icon: "icon-code",
        class: "code"
      },
      {
        name: "Ciência de Dados",
        icon: "icon-data",
        class: "data-science"
      }
    ]
  })
};
</script>
<style lang="scss">
@import "../assets/variables.scss";
.courses-page {
  .secondary--page {
    z-index: 0;
  }
  .courses {
    padding-top: 4%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
   
    .courses--item {
      width: 350px;
      height: 400px;
      padding: 15% 0%;
      img {
        z-index: 2;
        height: 150px;
        margin-bottom: 15%;
      }
      span {
        color: white;
        font-weight: light;
        display: block;
        font-size: 30px;
      }
      &--code {
        border: 3px solid $green !important;
        background-color: $green !important;
        &:hover {
          border: 3px solid $green;
          background-color: $dark-green !important;
          cursor: pointer;
          box-shadow: 3px 3px 10px $green;
        }
      }
      &--data-science {
        border: 3px solid $red !important;
        background-color: $red !important;
        &:hover {
          border: 3px solid $red;
          background-color: $dark-red !important;
          cursor: pointer;
          box-shadow: 3px 3px 10px $red;
        }
      }
      &--mobile {
        border: 3px solid $blue !important;
        background-color: $blue !important;
        &:hover {
          border: 3px solid $blue;
          background-color: $dark-blue !important;
          cursor: pointer;
          box-shadow: 3px 3px 10px $blue;
        }
      }
      @media screen and (max-width: 500px) {
        width: 300px;
        height: 200px;
        img {
          height: 70px;
          margin-bottom: 5%;
        }
      }
    }
    &--list {
      &--code {
        width: 200px;
        border: 1px;
      }
    }
    @media screen and (min-width: 500px) {
      padding-left: 10em;
      padding-right: 10em;
      display: flex;
    }
  }
}
.align-cards {
  display: flex !important;
  justify-content: center;
}
</style>
