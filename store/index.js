import {defineStore} from "pinia";

export const useStore = defineStore("storeId", {
    state: () => {
        return {
            counter: 0,
            cartCounter: 0,
            currentStep: 0,
        };
    },
    actions: {
        setCartCounter(value) {
            this.cartCounter = value
        },
        setCurrentStep(value) {
            this.currentStep = value
        }

    },

    getters: {},
});
