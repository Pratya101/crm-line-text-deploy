<template>
  <v-card class="rounded-lg">
    <v-card-title class="py-2">
        <span>
          <v-icon>mdi-account-clock-outline</v-icon> {{ $t('pending') }}
        </span>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-divider></v-divider>
    <v-data-table
      :headers="headers"
      disable-sort
      :options="options"
      mobile-breakpoint="0"
      :items="desserts"
      :no-data-text="$t('no_information')"
    ></v-data-table>
  </v-card>
</template>
<script>
import {ref} from "@nuxtjs/composition-api"

export default {
  name: 'Pending',
  setup() {
    const headers = ref([
      {text: '#', value: 'id'},
      {text: 'เวลา-วันที่', value: 'date'},
      {text: 'หัวข้อ', value: 'phone'},
      {text: 'ตัวเลือก', value: 'email'},
    ])
    const options =ref({})
    const desserts = ref([
      {
        id: 'Frozen Yogurt',
        date: 159,
        phone: 6.0,
        email: 24,
      },
      {
        id: 'Frozen Yogurt',
        date: 159,
        phone: 6.0,
        email: 24,
      },
    ])
    return {
      headers,
      options,
      desserts,
    }

  },
}
</script>
