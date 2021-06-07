const Input = ({ type, classes, ...rest }) => {
    return (
        <input
            type={type}
            className={classes ? `form__control-input ${classes}` : 'form__control-input' }
            {...rest}
        />
    )
}

Input.defaultProps = {
    type: 'text'
}

export default Input
