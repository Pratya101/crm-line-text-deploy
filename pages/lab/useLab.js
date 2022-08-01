import {ref} from "vue"

export default function useLab() {
    const tableColumns = [
        {text: '#', value: 'customer_group_name', align: 'center'},
        {text: 'เลขที่', value: 'customer_group_save', align: 'center'},
        {text: 'วันที่', value: 'customer_group_save_name', align: 'center'},
        {text: 'แพทย์', value: 'customer_group_save_name', align: 'center'},
        {text: 'ตัวเลือก', value: 'actions', align: 'center'},
    ]
    const loading = ref(false)
    const options = ref({})
    const dataTableList = ref([])
    const footer = ref(
        {
            "items-per-page-text": "จำนวนรายการต่อหน้า",
            "items-per-page-options": [
                10,
                15,
                20,
                50,
                100,
                -1
            ],
            "items-per-page-all-text": "ทั้งหมด",
            "show-current-page": true,
            "show-first-last-page": true,
            "page-text": "จำนวน {0} ถึง {1} ของ {2} รายการ"
        }
    )
    return {
        tableColumns,
        loading,
        options,
        dataTableList,
        footer,
    }
}