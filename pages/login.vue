<template>
  <div>

    <v-carousel height="320" class="rounded-lg elevation-4">
      <v-carousel-item
          v-for="(item,i) in imageList"
          :key="i"
      >
        <v-img :src="item" contain>
        </v-img>
      </v-carousel-item>
    </v-carousel>

    <v-btn color="#25c100" class="mt-9" block rounded dark :loading="loading" @click="LoginLine">
      {{ $t('login') }}
    </v-btn>
  </div>
</template>

<script>
import {ref, onMounted} from "@nuxtjs/composition-api"

export default {
  layout: 'auth',
  model: {
    props: 'isActive',
    event: 'update:isActive'
  },
  components: {},
  setup(_, {root, emit}) {
    const loading = ref(false)
    const lineId = ''
    onMounted(async () => {
      // Using a Promise object
      await liff
          .init({
            liffId: "1657347495-bMBqVdw7", // Use own liffId
          })
          .then(() => {
            if (liff.isLoggedIn()) {
              console.log('is login ', liff.isLoggedIn())
              liff.getProfile().then((profile) => {
                console.log('data profile : ', profile)
              })
            } else {
              console.log('not login')
              liff.login();
            }
          })
          .catch((err) => {
            // Error happens during initialization
            console.log(err.code, err.message);
          });

    });
    // await liff.init({liffId: lineId}).then(() => {
    //       console.log('liff', liff.isLoggedIn())
    //       // if (liff.isLoggedIn()) {
    //       //   console.log('login success')
    //       // } else {
    //       //   console.log('login field : ')
    //       // }
    //     }
    // ).catch((err) => {
    //   console.log("Error", err);
    // });

    const LoginLine = () => {
      loading.value = true
      liff.login();
    }


    const imageList = ref([
      'https://crm-line.netlify.app/static/media/imag00.f6ef995f.png',
      'https://crm-line.netlify.app/static/media/imag01.ae96cd23.png',
      'https://crm-line.netlify.app/static/media/imag02.2c05e541.png',
      'https://crm-line.netlify.app/static/media/imag03.ca152102.png',
      'https://crm-line.netlify.app/static/media/imag04.d7364f3d.png'
    ])
    return {
      LoginLine,
      imageList,
      loading,
    };
  },

}
</script>

<style scoped>

</style>