import PropTypes from 'prop-types'

const ScreenRow = ({ value }) => {
  return (
    <div className="screen-row">
      <input type="text" readOnly value={value} />
    </div>
  )
}

ScreenRow.propTypes = {
  value: PropTypes.string.isRequired
}

export default ScreenRow

