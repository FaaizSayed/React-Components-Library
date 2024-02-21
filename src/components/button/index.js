import './index.css';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, color, textSize, rounded}) => {

    const ButtonStyle = 'font-bold py-2 px-4 rounded m-3';
    const defaultButtonStyle = 'bg-blue-500 hover:bg-blue-700 text-white text-base';
    const buttonColor = {
        red: 'bg-red-500 hover:bg-red-700 text-white',
        green: 'bg-green-500 hover:bg-green-700 text-white',
        blue: 'bg-blue-500 hover:bg-blue-700 text-white'
    };
    const buttonTextSize = {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
    }


    const fullyRounded = rounded ? 'rounded-full' : '';

    const styling = (color && textSize) ? `${buttonColor[color]} ${buttonTextSize[textSize]}` : defaultButtonStyle;

    const buttonStyle = `${ButtonStyle} ${styling} ${fullyRounded}`;

    return (
        <button role="button" onClick={onClick} className={buttonStyle}>{children}</button>
    )
};

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.object,
    color: PropTypes.string,
    textSize: PropTypes.string,
};

export default Button;