import {ref} from "@nuxtjs/composition-api";

export default function useIndex(root) {
  const tab = ref(0);
  const items = ref([
    'โปรโมชั่นคอร์ส', 'ผลิตภัณฑ์', 'บัตรสมาชิก',
  ])
  return {
    tab, items,


  };
}
