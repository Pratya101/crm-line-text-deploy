<template>
  <div>
    <v-card class="rounded-lg">
      <v-card-title>
        {{ $t('Profile') }}
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="d-flex flex-column align-center justify-center ">
        <v-avatar size="110">
          <v-img
              src="https://apsth-assets-upload.s3.ap-southeast-1.amazonaws.com/shop/shop_1_202205170559033.png">
          </v-img>
        </v-avatar>
        <div class="d-flex">
          <v-text-field v-model="fname" outlined dense :label="$t('firstname')" :placeholder="$t('firstname')"
                        hide-details="auto" class="mt-2 me-2"
                        style="width: 100%">

          </v-text-field>
          <v-text-field v-model="lname" outlined dense :label="$t('lastname')" :placeholder="$t('lastname')"
                        hide-details="auto" class="mt-2"
                        style="width: 100%">

          </v-text-field>
        </div>
        <v-text-field v-model="tel" outlined dense :label="$t('tel')" :placeholder="$t('tel')"
                      hide-details class="mt-2 "
                      style="width: 100%">

        </v-text-field>
        <v-text-field v-model="email" outlined dense :label="$t('email')" :placeholder="$t('email')"
                      hide-details="auto" class="mt-2 "
                      style="width: 100%">

        </v-text-field>
        <v-radio-group v-model="gender" row hide-details="auto" class="mt-1">
          <v-radio
              :label="$t('male')"
              :value="1"
          ></v-radio>
          <v-radio
              class="me-9"
              :label="$t('female')"
              :value="2"
          ></v-radio>
        </v-radio-group>
        <v-text-field v-model="birthdate" outlined dense :label="$t('birthday')" :placeholder="$t('birthday')"
                      @click="selectDate = true"
                      hide-details="auto" class="mt-2"
                      style="width: 100%">

        </v-text-field>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary">
          {{ $t('save') }}
        </v-btn>
        <v-btn color="secondary" outlined>
          {{ $t('cancel') }}
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
    <v-dialog ref="selectDate1" v-model="selectDate" :return-value.sync="birthdate" width="290px">
      <v-date-picker v-model="birthdate" :locale="$i18n.locale" scrollable>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="$refs.selectDate1.save(birthdate)">
          {{ $t('confirm') }}
        </v-btn>
        <v-btn color="secondary" @click="selectDate = false" outlined>
          {{ $t('cancel') }}
        </v-btn>
        <v-spacer></v-spacer>
      </v-date-picker>
    </v-dialog>
  </div>
</template>

<script>
import userProfile from "./userProfile";

export default {
  name: "profile",
  setup() {
    return {
      ...userProfile()
    }
  },
}

</script>

<style scoped>

</style>