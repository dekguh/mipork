const Button = ({ classes, type, text, ...rest }) => {
    return (
        <button className={classes ? `button ${classes}` : 'button'} type={type} {...rest}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    type: 'button'
}

export default Button
