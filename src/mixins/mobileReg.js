import toast from '../utils/toast'
export default {
  methods: {
    validPhone (tel, mobileReg = /^1[34578]\d{9}$/) {
      if (tel.trim().length === 0) {
        toast('请输入您的手机号码！')
        return false
      } else if (!mobileReg.test(tel.trim())) {
        toast('请输入正确的手机号码！')
        return false
      }
      return true
    }
  }
}
