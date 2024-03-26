import PropTypes from 'prop-types';

export default function Button({btn, theme, onClick}) {
  return (
    <div>
      <button className="button" data-type={theme} onClick={onClick}>{btn}</button>
    </div>
  )
}

Button.propTypes = {
    btn: PropTypes.string.isRequired,
    theme: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};
