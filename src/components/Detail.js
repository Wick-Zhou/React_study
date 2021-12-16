import { Button } from 'antd'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

const Detail = (props) => {
  const {
    history: { goBack },
    match: { params: { title } },
    location: { state: { imgUrl } },
  } = props
  return (
    <div>
      <Button onClick={() => { goBack() }}>{'<返回'}</Button>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <p style={{
          width: 300, textAlign: 'center', fontSize: 20, fontWeight: 'bold',
        }}
        >
          {title}
        </p>
        <img style={{ width: 300 }} src={imgUrl} alt="" />
      </div>
    </div>
  )
}
Detail.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default withRouter(Detail)
