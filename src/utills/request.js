import axios from 'axios'

const host = 'http://140.143.228.212'

const fecthTooken = (mobile, password) =>{
  return axios.get(`${host}/api/login`, {
    parmas: {
      password: password,
      mobile: mobile
    }
  })
}

export default { fecthTooken }
