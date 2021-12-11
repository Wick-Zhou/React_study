import GoodsList from '../components/GoodsList'
import Login from '../components/Login'
import ShopCar from '../components/ShopCar'
import Option5 from '../components/Option5'

const mainRoutes = [
  {
    path: '/option1',
    component: GoodsList,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/option3',
    component: ShopCar,
  },
  {
    path: '/option5',
    component: Option5,
  },
]

export default mainRoutes
