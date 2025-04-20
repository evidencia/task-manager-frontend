import PropTypes from 'prop-types'

function InputLabel(props) {
  return (
    <label className="text-sm font-semibold text-[#35383E]" {...props}>
      {props.children}
    </label>
  )
}

InputLabel.protoType = {
  children: PropTypes.node.isRequired,
}
export default InputLabel
