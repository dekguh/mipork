const Title = ({ component: Component, classes, text, ...rest }) => {
    return (
        <Component className={classes ? `title__custom ${classes}` : 'title__custom'} {...rest}>
            {text}
        </Component>
    )
}

Title.defaultProps = {
    component: 'h3'
}

export default Title
