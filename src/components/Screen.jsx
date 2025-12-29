import PropTypes from 'prop-types'
import ScreenRow from './ScreenRow'

const Screen = ({ question, answer }) => {
  return (
    <div className="screen">
      <ScreenRow value={question} />
      <ScreenRow value={answer} />
    </div>
  )
}

Screen.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
}

export default Screen

