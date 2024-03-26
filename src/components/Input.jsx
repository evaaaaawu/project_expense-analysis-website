import PropTypes from 'prop-types';

export default function Input({ type, className, placeholder, onChange, value, inputRef}) {
  //TODO //因為 AuthInput 是共用元件，要判斷是哪邊在使用它並做對應變化
  // let inputLengthLimit = 0

  // if (label === "mainCategory") {
  //   inputLengthLimit = 10
  // } else if (label === "subCategory") {
  //   inputLengthLimit = 20
  // } else if (label === "note") {
  //   inputLengthLimit = 50
  // } else {
  //   inputLengthLimit = null
  // }

  return (
    <div>
      <input type={type || "text"} className={className} placeholder={placeholder} onChange={e => onChange?.(e.target.value)} defaultValue={value} ref={inputRef} />
    </div>
  )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    // borderLine: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    inputRef: PropTypes.object,
};
