import axios from 'axios'
axios.defaults.baseURL = 'https://dev-v2.bundleb2b.net/apidoc-server/app/mock/55/'
export const getList = () => axios.get('api/getlist')
export const getLogin = () => axios.get('api/login')