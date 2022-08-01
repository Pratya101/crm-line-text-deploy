<template>
  <div>
    <v-card class="rounded-lg">
      <v-card-title>
        {{ $t('remaining_course') }}
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
import useCourse from "./useCourse";

export default {
  name: "course",
  components: {},
  setup(_, {root, emit}) {
    return {
      ...useCourse()
    };
  },

}
</script>

<style scoped>

</style>