<template>
  <div class="contact">
    <div class="secondary--page" />
    <v-container class="contact--page">
      <v-row>
        <v-col cols="12" md="7" sm="12"></v-col>
        <v-col cols="12" md="5" sm="12" class="contact-form">
          <div>
            <input placeholder="Nome" type="text" v-model="form.name" />
          </div>
          <div>
            <input placeholder="Email" type="text" v-model="form.email" />
          </div>
          <div>
            <textarea
              placeholder="Message"
              type="text"
              v-model="form.message"
            />
          </div>
          <v-row>
            <v-col cols="12" md="6" sm="6">
              <router-link to="/"
                ><v-btn dark outlined>Cancelar</v-btn></router-link
              >
            </v-col>
            <v-col cols="12" md="6" sm="6">
              <v-btn dark @click="sendMessage">Enviar</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data: () => ({
    form: {
      name: "",
      email: "",
      message: "",
      date: ""
    }
  }),
  methods: {
    sendMessage() {
      const dt = new Date();
      this.form.date = `${dt.getUTCDate()}/${dt.getUTCMonth() +
        1}/${dt.getUTCFullYear()} ${dt.getHours()}:${dt.getMinutes()}`;
      let ref = firebase.database().ref("the-valley-xp");
      if (this.validateForm()) {
        ref.push(this.form, () => {
          alert("Mensagem enviada!");
        });
      } else {
        alert("Todos os campos devem estar preenchidos.");
      }
    },
    validateForm() {
      if (
        this.form.name === "" ||
        this.form.email === "" ||
        this.form.message === "" ||
        this.form.date === ""
      ) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style lang="scss">
@import "../assets/variables.scss";
.contact {
  .secondary--page {
    opacity: 0.18;
    z-index: 1;
    @media screen and (min-width: 500px) {
      opacity: 1;
      z-index: 2;
    }
  }
  .contact--page {
    background-color: $dark;
    height: 100vh;
    position: absolute;
    padding-top: 7%;
    .contact-form {
      @media screen and (min-width: 500px) {
        padding-right: 5em;
      }
    }
    input {
      height: 38px;
      width: 100%;
      margin: 1em 0em;
      border-bottom: 1px solid gray;
      &:focus {
        outline: none;
        border-bottom-color: rgb(190, 188, 188);
      }
    }

    textarea {
      width: 100%;
      margin: 1em 0em;
      height: 150px;
      border-bottom: 1px solid gray;
      &:focus {
        outline: none;
        border-bottom-color: rgb(190, 188, 188);
      }
    }
    @media screen and (max-width: 500px) {
      padding-top: 15%;
      height: 100vh;
    }
    @media (min-width: 1264px) {
      max-width: 100% !important;
    }
  }
}
</style>
