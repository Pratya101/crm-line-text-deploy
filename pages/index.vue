<template>
  <div>
    <v-card class="rounded-lg elevation-4 mt-5 " v-for="ix in 2" :key="ix" ripple @click="$router.push('/product')"
            height="108">
      <v-card-text class="pl-2 py-1">
        <v-row>
          <v-col cols="4" class="pr-1">
            <v-img width="100" class="rounded-lg"
                   src="https://apsth-assets-upload.s3.ap-southeast-1.amazonaws.com/shop/shop_1_202205170559033.png"
                   lazy-src="https://apsth-assets-upload.s3.ap-southeast-1.amazonaws.com/shop/shop_1_202205170559033.png"
            ></v-img>
          </v-col>
          <v-col cols="8" class="pl-0 ">
            <h4 class="font-weight-bold ">
              APSTH CLINIC
            </h4>
            <h5 class="font-weight-bold ">
              เลขที่ ใบอนุญาติ : 552201102
            </h5>
            <h5 class="font-weight-bold ">
              เบอร์โทรศัพทย์ : 0951481485
            </h5>
            <v-icon color="error" large style="position: absolute;right:2%;bottom: 4%">mdi-map-marker-radius-outline
            </v-icon>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import useIndex from "./useIndex";
import ProductLIst from "~/components/productList/ProductLIst";

export default {
  components: {
    ProductLIst
  },
  setup(_, {root}) {
    return {
      ...useIndex(root),
    };
  },
};
</script>
