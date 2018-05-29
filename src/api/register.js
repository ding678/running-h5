import axios from 'axios'

const host = 'http://140.143.228.212'
const register = (mobile, password, confirmPassword, testcode) => {
  console.log(mobile, password, confirmPassword, testcode)
  return axios.post(`${host}/api/register`, {
    mobile: mobile,
    password: password,
    password_confirmation: confirmPassword,
    verify_code: testcode
  })
}

const registerVerify = (moblie, password, confirmPassword) => {
  return axios.post(`${host}/api/code/register`, {
    mobile: moblie,
    password: password,
    password_confirmation: confirmPassword,
  })
}

export default {register, registerVerify}
