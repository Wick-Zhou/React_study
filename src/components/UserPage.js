import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { changeLogin } from '../store/feature/loginSlice'

const UserPage = (props) => {
  const dispatch = useDispatch()
  const { username } = useSelector((state) => state.login)
  const { history: { push } } = props
  const logout = () => {
    sessionStorage.removeItem('isLogin')
    sessionStorage.removeItem('username')
    dispatch(changeLogin({ isLogin: false }))
    push('/login')
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>
          {username}
          -您已登录!
        </span>
        <Button danger onClick={() => logout()}>退出</Button>
      </div>
    </div>
  )
}

UserPage.propTypes = {
  history: PropTypes.object.isRequired,
}

export default (withRouter(UserPage))
