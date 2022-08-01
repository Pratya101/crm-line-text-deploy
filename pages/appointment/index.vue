<template>
  <div>
    <v-tabs
        v-model="tab"
        grow
        centered
        background-color="transparent"
    >
      <v-tab>
        <v-icon small class="me-1">mdi-calendar</v-icon>
        {{ $t('my_appointment') }}
      </v-tab>
      <v-tab>
        <v-icon small class="me-1">mdi-account-clock-outline</v-icon>
        {{ $t('pending') }}
      </v-tab>
    </v-tabs>
    <v-divider class="mb-2"></v-divider>
    <v-tabs-items v-model="tab" class="my-2 px-2">
      <v-tab-item class="mb-2">
        <Calendar/>
      </v-tab-item>
      <v-tab-item
          class="mb-2"
      >
        <Pending/>
      </v-tab-item>
    </v-tabs-items>

  </div>
</template>

<script>
import useAppointment from './useAppointment.js'
import Calendar from "~/pages/appointment/Calendar";
import Pending from "~/pages/appointment/Pending";

export default {
  components: {
    Pending,
    Calendar,
  },
  name: "Appointment",
  setup(_, {root}) {
    return {
      ...useAppointment(root)
    }
  },


}
</script>

