import axios from 'axios'

const HTTPClient = axios.create({
  baseURL: 'https://api.github.com/'
})

export default { HTTPClient }
