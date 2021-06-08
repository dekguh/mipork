import Link from 'next/link';

const Title = ({ component: Component, classes, text, href, classesLink, ...rest }) => {
    return (
    <>
        <Component className={classes ? `title__custom ${classes}` : 'title__custom'} {...rest}>
            {!href && text}
            {href && <Link href={href}>
                <a className={classesLink}>
                    {text}
                </a>
            </Link>}
        </Component>
    </>
    )
}

Title.defaultProps = {
    component: 'h3'
}

export default Title
