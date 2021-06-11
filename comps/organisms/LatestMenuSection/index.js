import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardMenuList from '../../molecules/CardMenuList';
import TitleSection from '../../molecules/TitleSection';
import { addToCartAct } from '../../utils/reducers/CartAction';

const LatestMenuSection = ({ classes, dataMenu, totalShow, dispatchAddCart }) => {
    const [dataLatestMenu, setDataLatestMenu] = useState([]);

    useEffect(() => {
        const sortMenu = dataMenu.sort((a, b) => b.id - a.id);
        const sliceMenu = (totalShow && sortMenu.slice(0, totalShow)) || dataLatestMenu;
        setDataLatestMenu(sliceMenu);
    }, []);

    return (
        <div className={classes ? `latest__menu-wrapper ${classes}` : 'latest__menu-wrapper'}>
            <TitleSection classes='margin-bottom-12' title='Menu Terbaru'></TitleSection>

            {dataLatestMenu && dataLatestMenu.map((data, i) => (
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
    )
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchAddCart: data => dispatch(addToCartAct(data))
    }
}

export default connect(null, mapDispatchToProps)(LatestMenuSection)
