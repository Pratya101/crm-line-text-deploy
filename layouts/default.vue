<template>
  <v-app>
    <v-app-bar elevation="7" app fixed color="primary" dark>
      <v-img
          max-width="45"
          @click="$router.push({
        path:'/product'
        })"
          class="rounded-lg elevation-4 me-2"
          src="https://apsth-assets-upload.s3.ap-southeast-1.amazonaws.com/shop/shop_1_202205170559033.png"
      ></v-img>
      <v-btn icon to="/appointment">
        <v-icon>mdi-calendar-month</v-icon>
      </v-btn>
      <v-btn icon to="/assignment">
        <v-icon>mdi-file-document-edit-outline</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-menu offset-y left nudge-bottom="14" min-width="230" content-class="user-profile-menu-content">
        <template v-slot:activator="{ on, attrs }">
          <v-badge bottom color="success" overlap offset-x="12" offset-y="12" class="ms-4" dot>
            <v-avatar size="45px" v-bind="attrs" color="primary" class="v-avatar-light-bg primary--text" v-on="on">
              <v-img
                  src="https://apsth-assets-upload.s3.ap-southeast-1.amazonaws.com/shop/shop_1_202205170559033.png"
              ></v-img>
            </v-avatar>
          </v-badge>
        </template>
        <v-list dense>
          <div class="pb-3 pt-2">
            <v-badge bottom color="success" overlap offset-x="12" offset-y="12" class="ms-4" dot>

              <v-avatar size="45px" color="primary" class="v-avatar-light-bg primary--text">
                <v-img
                    src="https://apsth-assets-upload.s3.ap-southeast-1.amazonaws.com/shop/shop_1_202205170559033.png"
                ></v-img>
              </v-avatar>
            </v-badge>
            <div class="d-inline-flex flex-column justify-center ms-3" style="vertical-align: middle">
              <span class="text--primary font-weight-semibold mb-n1"> John Doe </span>
              <small class="text--disabled text-capitalize">1,000 แต้ม</small>
            </div>
          </div>


          <v-divider></v-divider>
          <v-list-item to="/profile">
            <v-list-item-icon class="me-2">
              <v-icon size="22">
                mdi-account-outline
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ $t('Profile') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>


          <v-list-item to="/appointment">
            <v-list-item-icon class="me-2">
              <v-icon size="22">
                mdi-calendar-outline
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ $t('schedule') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/course">
            <v-list-item-icon class="me-2">
              <v-icon size="22">
                mdi-auto-fix
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ $t('remaining_course') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/opdcardimage">
            <v-list-item-icon class="me-2">
              <v-icon size="22">
                mdi-image-outline
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ $t('image') }}/OPD Card</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/lab">
            <v-list-item-icon class="me-2">
              <v-icon size="22">
                mdi-flask
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ $t('lab_results') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/assignment">
            <v-list-item-icon class="me-2">
              <v-icon size="22">
                mdi-file-document-edit-outline
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ $t('formAssignment') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/order">
            <v-list-item-icon class="me-2">
              <v-icon size="22">
                mdi-receipt-text-outline
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ $t('order_history') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item href="#">
            <v-list-item-icon class="me-2">
              <v-icon size="22">
                mdi-web
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>เปลี่ยนภาษา</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider class="my-2"></v-divider>

          <!-- Logout -->
          <v-list-item href="#">
            <v-list-item-icon class="me-2">
              <v-icon size="22">
                mdi-logout-variant
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ $t('log_out') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main style="background-color: #f8f9f9;font-family: 'Kanit', sans-serif">
      <v-container>
        <v-fade-transition>
          <Nuxt/>
        </v-fade-transition>
        <v-badge

            bordered
            offset-x="20"
            offset-y="15"
            color="error"
            overlap
            :value="cartCounter"
            :content="cartCounter"
            style="position: fixed;right: 4%;bottom: 2%;z-index: 99"
        >
          <v-btn color="error" fab>
            <v-icon class="white--text">mdi-cart-outline</v-icon>
          </v-btn>
        </v-badge>
      </v-container>
    </v-main>
    <v-footer dark padless app fixed>
      <v-card class="flex" flat tile color="primary">
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>APSTH</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import {useStore} from "@/store";

export default {
  name: "DefaultLayout",
  data() {
    return {
      store: useStore(),
      fixed: false,
      cartCounter: 0,
      right: true,
    };
  },
  watch: {
    'store.cartCounter'(value) {
      console.log('value : ', value)
      this.cartCounter = value
    }
  }

};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap");
</style>
