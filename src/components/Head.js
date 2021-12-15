import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Head = (props) => {
  const { isLogin, username } = props
  return (
    <div style={{ color: 'white' }}>
      <span style={{ color: 'white', fontWeight: '900', fontSize: 20 }}>welcome</span>
      {
        isLogin ? (
          <span>
            {' '}
            -
            {' '}
            {username}
          </span>
        ) : ''
      }
    </div>
  )
}

Head.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  username: state.loginReducer.username, isLogin: state.loginReducer.isLogin,
})

export default connect(mapStateToProps, null)(Head)
