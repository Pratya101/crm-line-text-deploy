import {ref} from "@nuxtjs/composition-api";
import {useStore} from "~/store";

export  default  function useId(){
  const store = useStore()
  const tab = ref(0);
  const counter = ref(store.cartCounter)
  const addCart = ()=>{
    store.setCartCounter(counter.value++)
  }
  return{
    addCart,
    tab
  }
}
