export const required = value => (value || (value && value.length) ? true : 'ต้องระบุ')

export const telValidator = value => (value.length >= 9 && value.length <= 10) || 'หมายเลขโทรศัพท์ 9-10 ตัวเลข'
