import axios from 'axios'
axios.defaults.baseURL = 'https://rap2.mez100.com/rapserver/app/mock/55/'
export const getList=()=>axios.get('example/1638757540019')