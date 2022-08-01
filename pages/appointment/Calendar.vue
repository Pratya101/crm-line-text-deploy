<template>
  <div>
    <v-card class="rounded-lg">
      <v-card-title class="py-2">
        <span>
          <v-icon>mdi-calendar-month</v-icon> {{ $t('my_appointment') }}
        </span>
        <v-spacer></v-spacer>
        <v-btn icon outlined color="primary" @click="isAddNewAppointment = true">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-calendar
          ref="calendar"
          :event-overlap-threshold="30"
        ></v-calendar>
      </v-card-text>
    </v-card>
    <AddNewAppointment v-model="isAddNewAppointment"/>
  </div>
</template>
<script>
import AddNewAppointment from "~/pages/appointment/AddNewAppointment";
import {ref} from "@nuxtjs/composition-api";

export default {
  components: {
    AddNewAppointment
  },
  name: 'Calendar',
  setup() {
    const isAddNewAppointment = ref(false)
    return {
      isAddNewAppointment,
    }
  },
}
</script>
