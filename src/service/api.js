import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = 'https://dev-v2.bundleb2b.net/apidoc-server/app/mock/55/'
export const getList = () => axios.get('api/getlist')
export const getLogin = (data) => axios.post('http://localhost:5000/login',data)