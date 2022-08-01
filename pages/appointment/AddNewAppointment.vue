<template>
  <v-dialog v-model="isAddNewAppointment" persistent max-width="100%">
    <v-card>

      <v-card-title class="pt-2  ps-4 pe-2">
        {{ $t('add_appointments') }}
        <v-spacer></v-spacer>
        <v-btn color="error" fab small icon @click="$emit('update:isAddNewAppointment',false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="px-0">
        <v-form
          ref="formAddAppointment"
          @submit.prevent="createAppointment"
        >
          <v-card-text>
            <v-autocomplete
              v-model.trim="customer_id_pri"
              :label="$t('choose_a_checker')"
              :no-data-text="$t('no_information')"
              :placeholder="$t('input_three_charector')"
              item-text="customer_fullname"
              outlined
              hide-details="auto"
              dense
              auto-select-first
              item-value="customer_id_pri"
            >
            </v-autocomplete>
            <v-text-field
              v-model="appoint_tel"
              :label="$t('tel')"
              hide-details="auto"
              outlined
              class="mt-3"
              dense
            >
            </v-text-field>
            <v-text-field
              v-model="appoint_topic"
              hide-details="auto"
              outlined
              class="mt-3"
              dense
              :label="$t('topic')"
            >
            </v-text-field>
            <v-autocomplete
              v-model="user_id"
              :items="[]"
              :rules="[required]"
              item-value="user_id"
              :placeholder="$t('select_inspectors')"
              outlined
              class="mt-3"
              hide-details="auto"
              :no-data-text="$t('no_information')"
              :label="$t('doctor_appointment')"
              dense
              item-text="user_fullname"
            >
            </v-autocomplete>
            <v-dialog
              ref="date1"
              v-model.trim="isShowDate"
              :return-value.sync="appoint_date"
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model.trim="appoint_date"
                  outlined
                  hide-details="auto"
                  :label="$t('date_of_appointment')"
                  dense
                  class="mt-3"
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="appoint_date"
                class=""

                :locale="$i18n.locale"
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  :disabled="!appoint_date"
                  @click="$refs.date1.save(appoint_date)"
                >
                  {{ $t("confirm") }}
                </v-btn>
                <v-btn
                  text
                  color="secondary"
                  @click="isShowDate = false"
                >
                  {{ $t("cancel") }}
                </v-btn>

                <v-spacer></v-spacer>
              </v-date-picker>
            </v-dialog>
            <v-select
              v-model="appoint_start"
              :items="[]"
              outlined
              hide-details="auto"
              :label="$t('time')"
              dense
              class="mt-3"
              :no-data-text="$t('no_information')"
              item-text="section_time"
              item-values="section_time"
            >
            </v-select>
            <v-textarea
              hide-details="auto"
              v-model="appoint_note"
              outlined
              class="mt-3"
              :label="$t('note')"
              rows="3"
            ></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              class="rounded-lg"
              :loading="loading"
              :disabled="loading"
            >
              {{ $t('save') }}
            </v-btn>
            <v-btn
              color="secondary"
              outlined
              class="rounded-lg"
              @click="$emit('update:isAddNewAppointment',false)"
            >
              {{ $t('cancel') }}
            </v-btn>
            <v-spacer></v-spacer>

          </v-card-actions>
        </v-form>

      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import {ref, watch} from "@nuxtjs/composition-api"
import {required} from "~/utils/validation";

export default {
  model: {
    prop: 'isAddNewAppointment',
    event: 'update:isAddNewAppointment'
  },
  props: {
    isAddNewAppointment: {
      type: Boolean,
      default: false,
    },
  },
  name: "AddNewAppointment",
  setup(props, {emit, root}) {
    const formAddAppointment = ref(null)
    const appoint_tel = ref('')
    const appoint_date = ref('')
    const appoint_start = ref('')
    const user_id = ref('')
    const appoint_topic = ref('')
    const appoint_note = ref('')
    const searchCustomerLoading = ref(false)
    const searchTextCustomer = ref('')
    const customerList = ref([])
    const customer_id_pri = ref('')
    const shop_id_pri = ref('')
    const userList = ref([])
    const isShowDate = ref(false)
    const timeList = ref([])
    const loading = ref(false)
    const isDate = ref({})
    const isDateError = ref(true)


    return {
      formAddAppointment,
      appoint_tel,
      appoint_date,
      appoint_start,
      user_id,
      appoint_topic,
      appoint_note,
      searchCustomerLoading,
      searchTextCustomer,
      customerList,
      customer_id_pri,
      shop_id_pri,
      userList,
      isShowDate,
      timeList,
      loading,
      isDate,
      isDateError,
      required,
    }
  },
}
</script>

<style scoped>

</style>
