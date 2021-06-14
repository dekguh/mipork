import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CardMenuList from '../../molecules/CardMenuList'
import { JsonDataMenu } from '../../utils/data/fake'
import { addToCartAct } from '../../utils/reducers/CartAction'
import { updateSearchTextAct } from '../../utils/reducers/SearchAction'
import FormSearch from '../FormSearch'

const SearchResultSection = ({ searchText, dispatchUpdateSearchText, dispatchAddCart }) => {
    const [dataSearch, setDataSearch] = useState([]);

    useEffect(() => {
        const serachFilter = JsonDataMenu.filter(data => data.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
        const sortMenu = serachFilter.sort((a, b) => b.id - a.id);
        setDataSearch(sortMenu)
    }, [searchText]);

    const handleChangeSearchInput = e => {
        dispatchUpdateSearchText(e.target.value);
    }

    return (
        <div>
            <FormSearch classes='margin-bottom-12' onChange={handleChangeSearchInput} value={searchText ? searchText : ''} />
            {dataSearch.length > 0 && dataSearch.map((data, i) => (
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

const mapStateToProps = state => {
    return {
        searchText: state.search.searchText
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchUpdateSearchText: text => dispatch(updateSearchTextAct(text)),
        dispatchAddCart: data => dispatch(addToCartAct(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultSection)
