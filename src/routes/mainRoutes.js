import GoodsList from '../components/GoodsList'
import Login from '../components/Login'
import ShopCar from '../components/ShopCar'

const mainRoutes = [
  {
    path: '/goodlist',
    component: GoodsList,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/shopcar',
    component: ShopCar,
  },
]

export default mainRoutes
