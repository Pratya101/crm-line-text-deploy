import {ref} from "vue"

export default function userProfile() {

    const fname = ref('')
    const lname = ref('')
    const email = ref('')
    const tel = ref('')
    const gender = ref(1)
    const birthdate = ref('')
    const selectDate = ref(null)
    const selectDate1 = ref(null)

    return {
        selectDate1,
        fname,
        selectDate,
        lname,
        email,
        tel,
        gender,
        birthdate,
    }
}