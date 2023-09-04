import axios from 'axios'
const baseUrl = '/api/login'

const login = async (user) => {
  // console.log(user,"from services")
let loggedinUser = await axios.post(baseUrl, user)
  return loggedinUser.data;
}

export default { login }