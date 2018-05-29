import axios from 'axios'

const host = 'http://140.143.228.212'

const userlogin=(mobile,password)=>{
  return axios.post(`${host}/api/login`, {
    password: password,
    mobile: mobile
  })
}

export default {userlogin}
