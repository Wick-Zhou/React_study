import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { message } from 'antd'

axios.interceptors.request.use(
  (config) => {
    Nprogress.start()
    return config
  },
  (err) => Promise.reject(err).catch(() => {
    Nprogress.done()
  }),
)
axios.interceptors.response.use(
  (res) => {
    Nprogress.done()
    return res
  },
  (err) => Promise.reject(err).catch(() => {
    message.error('Failed to connect server')
    Nprogress.done()
  }),
)

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.baseURL = 'https://dev-v2.bundleb2b.net/apidoc-server/app/mock/55/'
export const getList = () => axios.get('api/getlist')
export const getLogin = (data) => axios.post('http://localhost:5000/login', data)
export const getRegister = (data) => axios.post('http://localhost:5000/register', data)
