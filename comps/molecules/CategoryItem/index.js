import Title from '../../atomics/Title';

const CategoryItem = ({ classes, icon, title, link }) => {
    return (
        <div className={classes ? `category__item` : 'category__item'}>
            <img src={icon} className='category__item-image' />
            <Title component='h6' text={title} href={link} classes='margin-bottom-0' />
        </div>
    )
}

export default CategoryItem
