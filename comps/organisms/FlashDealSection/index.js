import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import CounterDown from '../../atomics/CounterDown';
import CardMenuBox from '../../molecules/CardMenuBox';
import TitleSection from '../../molecules/TitleSection';
import { addToCartAct } from '../../utils/reducers/CartAction';

const FlashDealSection = ({ classes, dataMenu, totalShow, dispatchAddCart }) => {
    const [dataFlashDeal, setDataFlashDeal] = useState([]);

    useEffect(() => {
        const filterDiscount = dataMenu.filter(menu => menu.discount > 0);
        const sliceDiscount = (totalShow && filterDiscount.slice(0, totalShow)) || filterDiscount;
        setDataFlashDeal(sliceDiscount);
    }, []);

    return (
        <div className={classes ? `flash__deal-wrapper ${classes}` : 'flash__deal-wrapper'}>
            <TitleSection classes='margin-bottom-12' title='Flash Deal'>
                <CounterDown timestamp={1623640142000} />
            </TitleSection>

            <Carousel
                showThumbs={false}
                autoPlay={true}
                interval={5000}
                stopOnHover={true}
                infiniteLoop={true}
                className='flash__deal-carousel'
            >
            {dataFlashDeal && dataFlashDeal.map((data, i) => (
                <div className='flash__deal-carousel-item' key={i}>
                    <CardMenuBox
                        image={data.imageUrl}
                        price={data.price}
                        discount={data.discount}
                        bestseller={data.bestseller}
                        title={data.name}
                        link='#'
                        onClickCart={e => dispatchAddCart(data)}
                    />
                </div>
            ))}
            </Carousel>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchAddCart: data => dispatch(addToCartAct(data))
    }
}

export default connect(null, mapDispatchToProps)(FlashDealSection)
