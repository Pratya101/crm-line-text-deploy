<template>
  <div>
    <v-card class="rounded-lg">
      <v-card-title>
        {{ $t('order_history') }}
      </v-card-title>
      <v-divider></v-divider>
      <v-data-table
          :headers="tableColumns"
          :items="dataTableList"
          :options.sync="options"
          :footer-props="footer"
          mobile-breakpoint="0"
          :loading="loading"
          disable-sort
          hide-default-footer
          :loading-text="$t('data_loading')"
          :no-data-text="$t('no_information')"
      >
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import useOrder from "./useOrder";

export default {
  model: {
    props: 'isActive',
    event: 'update:isActive'
  },
  components: {},
  setup(_, {root, emit}) {
    return {
      ...useOrder()
    };
  },

}
</script>

<style scoped>

</style>