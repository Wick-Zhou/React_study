import { useSelector } from 'react-redux'

const Head = () => {
  const { isLogin, username } = useSelector((state) => state.login)
  return (
    <div style={{ color: 'white' }}>
      <span style={{ color: 'white', fontWeight: '900', fontSize: 20 }}>
        welcome
      </span>
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

export default Head
