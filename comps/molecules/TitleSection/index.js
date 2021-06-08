import Title from "../../atomics/Title"

const TitleSection = ({ children, classes, title }) => {
    return (
        <div className={classes ? `title__section ${classes}` : 'title__section'}>
            <div className='title__section-left'>
                <Title component='h4' classes='margin-bottom-0' text={title} />
            </div>
            <div className='title__section-right'>
                {children}
            </div>
        </div>
    )
}

export default TitleSection
