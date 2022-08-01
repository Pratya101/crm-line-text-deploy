<template>
  <div>
    <v-tabs
      v-model="tab"
      grow
      centered
      background-color="transparent"
    >
      <v-tab>
        <v-icon small class="me-1">mdi-auto-fix</v-icon>
        โปรโมชั่นคอร์ส
      </v-tab>
      <v-tab>
        <v-icon small class="me-1">mdi-cube-outline</v-icon>
        ผลิตภัณฑ์
      </v-tab>
      <v-tab>
        <v-icon small class="me-1">mdi-smart-card-outline</v-icon>
        บัตรสมาชิก
      </v-tab>
    </v-tabs>
    <v-divider></v-divider>
    <v-tabs-items v-model="tab" class="my-2 px-2" >
      <v-tab-item
        transition="fade-transition" rereverse-transition="fade-transition"
        v-for="item in items"
        :key="item"
        class="mb-2"
      >
        <ProductLIst/>
      </v-tab-item>
    </v-tabs-items>

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
