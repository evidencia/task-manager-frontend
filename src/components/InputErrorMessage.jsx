import PropTypes from 'prop-types'

function InputErrorMessage({ children }) {
  return <p className="text-left text-xs text-red-500">{children}</p>
}

InputErrorMessage.protoType = {
  children: PropTypes.node.isRequired,
}

export default InputErrorMessage
