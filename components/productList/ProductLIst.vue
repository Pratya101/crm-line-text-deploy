<template>
  <div>
    <v-card  elevation="3" class="rounded-lg mt-5 " v-for="ix in 10" :key="ix"
            @click="$router.push({path:'/product/200'})">
      <v-card-text class="pl-2 py-1">
        <v-row align="center">
          <v-col cols="4" class="pr-1">
            <v-img width="100" class="rounded-lg"
                   src="https://apsth-assets-upload.s3.ap-southeast-1.amazonaws.com/shop/shop_1_202205170559033.png"></v-img>
          </v-col>
          <v-col cols="8" class="pl-0 ">
            <div class="font-weight-bold d-flex justify-space-between">
              <div>botox 100 U</div>
              <small class="accent--text">ชำระเต็ม/ผ่อนชำระ</small>
            </div>
            <div class="">{{ text.substring(0, 60) }}......</div>
            <div class="error--text">จำนวน 1 ครัง</div>
            <div class="error--text">แต้มคืน 10 เแต้ม</div>
            <div class="white--text ribbon2 font-weight-bold">200,000.00</div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import userProductList from "./useProductList"

export default {
  setup() {
    return {
      ...userProductList()
    }
  }
}
</script>

