import { BaseButton, GoogleSignInButton, Invertedbutton } from './button.styles';

const BUTTON_TYPE_CLASSES = {
  base: BaseButton,
  google: GoogleSignInButton,
  inverted: Invertedbutton,
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = BUTTON_TYPE_CLASSES[buttonType];
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
