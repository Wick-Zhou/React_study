import { connect } from 'react-redux'
import { Button } from 'antd'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { logoutAction } from '../redux/actions/actions'

const UserPage = (props) => {
  const { history: { push }, logoutR, username } = props
  const logout = () => {
    sessionStorage.removeItem('isLogin')
    sessionStorage.removeItem('username')
    logoutR()
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
  logoutR: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({ username: state.loginReducer.username })

const mapDispatchToProps = (dispatch) => ({
  logout: () => { dispatch(logoutAction()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserPage))
