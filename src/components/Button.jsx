import PropTypes from 'prop-types'

const Button = ({ type, handleClick, label }) => {
  return (
    <input
      type="button"
      className={type === 'action' ? 'button action-button' : 'button input-button'}
      onClick={handleClick}
      value={label}
    />
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default Button

