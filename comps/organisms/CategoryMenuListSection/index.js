import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TitleSection from '../../molecules/TitleSection';
import { JsonDataMenu } from '../../utils/data/fake';
import { addToCartAct } from '../../utils/reducers/CartAction';
import CardMenuList from '../../molecules/CardMenuList';

const CategoryMenuListSection = ({ classes, titleSection, typeMenu, dispatchAddCart, dataMenu }) => {
    const [dataCategory, setDataCategory] = useState([]);

    useEffect(() => {
        const dataFilter = JsonDataMenu.filter(data => data.typeMenu == typeMenu);
        setDataCategory(dataFilter);
    }, []);

    return (
        <div className={classes ? `category__menu ${classes}` : 'category__menu'}>
            <TitleSection classes='margin-bottom-12' title={titleSection}></TitleSection>

            <div className='category__menu-list'>
                {(!dataMenu && dataCategory.length > 0) && dataCategory.map((data, i) => (
                    <CardMenuList
                        key={i}
                        image={data.imageUrl}
                        price={data.price}
                        discount={data.discount}
                        bestseller={data.bestseller}
                        title={data.name}
                        link='#'
                        classes={'margin-bottom-8'}
                        onClickCart={e => dispatchAddCart(data)}
                    />
                ))}
                {dataMenu && dataMenu.map((data, i) => (
                    <CardMenuList
                        key={i}
                        image={data.imageUrl}
                        price={data.price}
                        discount={data.discount}
                        bestseller={data.bestseller}
                        title={data.name}
                        link='#'
                        classes={'margin-bottom-8'}
                        onClickCart={e => dispatchAddCart(data)}
                    />
                ))}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchAddCart: data => dispatch(addToCartAct(data))
    }
}

export default connect(null, mapDispatchToProps)(CategoryMenuListSection)
