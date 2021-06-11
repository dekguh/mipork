const BlockMessage = ({ classes, text, children, ...rest }) => {
    return (
        <div className={classes ? `block__message ${classes}` : 'block__message'} {...rest}>
            <div>
                {text}
            </div>
            {children}
        </div>
    )
}

export default BlockMessage
