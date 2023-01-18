import "./Button.css";
import PropTypes from 'prop-types';

const Button = ({Children, variant, type, isDisable, className}) => {
  return (
    <div type={type} disabled={isDisable} className={`btn btn-${variant}`}>
      {Children}
    </div>
  )
}

Button.defaultProps = {
  variant : "primary",
  type: "button",
  isDisable: false,
  
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  variant: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
}
export default Button;
