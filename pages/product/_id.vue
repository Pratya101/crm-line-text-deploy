<template>
  <div>
    <v-card class="rounded-lg elevation-3 px-2 py-2">
      <v-btn color="#0000004a" fab absolute depressed style="top:-2%;left:-2%" x-small @click="$router.back()">
        <v-icon color="#fff">mdi-arrow-left-thick</v-icon>
      </v-btn>
      <v-carousel height="200" hide-delimiter-background hide-delimiters class="rounded-lg">
        <v-carousel-item
          v-for="(item,i) in 2"
          :key="i"
          src="https://apsth-assets-upload.s3.ap-southeast-1.amazonaws.com/shop/shop_1_202205170559033.png"

        ></v-carousel-item>
      </v-carousel>
      <h3 class="font-weight-bold">BOTOX 100 U</h3>
      <p class="mb-0"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda...</p>
      <div class="d-flex justify-space-between align-center">
        <small class="font-weight-bold error--text">จำนวน 1 ครั้ง
          <br> แต้มคืน 100 แต้ม
        </small>
        <h3 class="font-weight-bold error--text">
          ฿200,000.00
        </h3>
      </div>
          <v-btn color="accent" block  rounded @click="addCart"> <v-icon class="me-2">mdi-cart-outline</v-icon> สั่งซื้อสินค้า</v-btn>
    </v-card>
    <v-divider class="mt-4"></v-divider>

    <v-tabs
      v-model="tab"
      grow
      centered
      background-color="transparent"

    >
      <v-tab>
        <v-icon small class="me-1">mdi-dots-vertical</v-icon>
        รายละเอียด
      </v-tab>
      <v-tab>
        <v-icon small class="me-1">mdi-youtube</v-icon>
        วีดีโอ
      </v-tab>
      <v-tab>
        <v-icon small class="me-1">mdi-auto-fix</v-icon>
        คอร์สเพิ่มเติม
      </v-tab>
    </v-tabs>
    <v-divider></v-divider>
  </div>
</template>
<script>
import useId from "./useId"
export  default {
  setup(){
    return{
      ...useId()
    }
  }
}
</script>
