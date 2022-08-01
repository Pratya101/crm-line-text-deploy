<template>
  <v-app>
    <v-app-bar elevation="7" app fixed color="#25c100" dark height="100">
      <v-spacer></v-spacer>
      <h1>CRM - LINE</h1>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main style="background-color: #f8f9f9;font-family: 'Kanit', sans-serif">
      <v-container>
        <v-stepper elevation="0" style="background: #00000000" flat v-model="myStep" class="mb-4 elevation-0">
          <v-stepper-header>
            <v-stepper-step step="1" color="#25c100">
              Ad unit details
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="2" color="#25c100">
              Ad sizes
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3" color="#25c100">
              Ad templates
            </v-stepper-step>
          </v-stepper-header>
        </v-stepper>
        <v-fade-transition>

          <Nuxt/>
        </v-fade-transition>
      </v-container>
    </v-main>
    <v-footer dark padless fixed app>
      <v-card class="flex" flat tile color="#25c100">
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>APSTH</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import {useStore} from "@/store";
import {ref} from "@nuxtjs/composition-api";

export default {
  name: "DefaultLayout",
  data() {
    return {
      store: useStore(),
      myStep: 1,
      fixed: false,
      cartCounter: 0,
      right: true,
    };
  },
  watch: {
    'store.cartCounter'(value) {
      this.cartCounter = value
    },
    'store.setCurrentStep'(value) {
      this.myStep = value
    }
  }


};
</script>
<style lang="scss" scoped>
.v-stepper__header {
  height: 72px;
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-shadow: none;
}

@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap");
</style>
