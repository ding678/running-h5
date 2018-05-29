import axios from 'axios'

const host = 'http://140.143.228.212'
const fetchList = () => {
  return axios.get(`${host}/api/enrolls`)
}
const fetchDetail = (urlparmas) => {
  return axios.get(`${host}/api/enrolls/${urlparmas}`)
}
const fetchEnrolls = (page) => {
  return axios.get(`${host}/api/enrolls/1/users`, {
    params: {
      current_page: page
    }
  })
}
const saveEnrolls = (id) => {
  return axios.post(`${host}/api/enrolls`, {
    enroll_id: id
  })
}

export default {fetchList, fetchDetail, fetchEnrolls, saveEnrolls}
