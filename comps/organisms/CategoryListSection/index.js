import CategoryItem from "../../molecules/CategoryItem";
import TitleSection from '../../molecules/TitleSection';

const CategoryListSection = ({ classes }) => {
    return (
        <div className={classes ? `category__list-wrapper ${classes}` : 'category__list-wrapper'}>
            <TitleSection classes='margin-bottom-12' title='Kategori'></TitleSection>

            <div className='category__list'>
                <div className='category__list-item' style={{ paddingRight: '8px', width: '33.33%' }}>
                    <CategoryItem
                        link='#'
                        title='makanan'
                        icon='/images/icon_category/food.png'
                    />
                </div>

                <div className='category__list-item' style={{ paddingRight: '8px', paddingLeft: '8px', width: '33.33%' }}>
                    <CategoryItem
                        link='#'
                        title='minuman'
                        icon='/images/icon_category/drink.png'
                    />
                </div>

                <div className='category__list-item' style={{ paddingLeft: '8px', width: '33.33%' }}>
                    <CategoryItem
                        link='#'
                        title='snack'
                        icon='/images/icon_category/snack.png'
                    />
                </div>
            </div>
        </div>
    )
}

export default CategoryListSection
