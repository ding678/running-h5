import Cookies from 'js-cookie'

const setTooken = (usertooken) => {
  Cookies.set('tooken', usertooken)
}

const getTooken = () => {
  return Cookies.get('tooken')
}
const removeTooken = () => {
  return Cookies.remove('tooken')
}

export default {setTooken, getTooken, removeTooken}
