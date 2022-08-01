import {ref, watch, onMounted} from "@nuxtjs/composition-api"

export default function useAppointment() {
  const tab = ref(null)
  return {
    tab,
  }
}
