import { connect } from 'react-redux';
import { updateSearchTextAct } from '../../utils/reducers/SearchAction';
import FormSearch from '../FormSearch';
import { useRouter } from 'next/router';

const HomeSearch = ({ dispatchUpdateSearchText }) => {
    const Router = useRouter();

    const handleChangeSearchInput = e => {
        dispatchUpdateSearchText(e.target.value);
    }

    const handleBlurSearchInput = e => {
        Router.push('/search');
    }

    return (
        <div>
            <FormSearch classes='margin-bottom-12' onChange={handleChangeSearchInput} onBlur={handleBlurSearchInput} />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchUpdateSearchText: text => dispatch(updateSearchTextAct(text))
    }
}

export default connect(null, mapDispatchToProps)(HomeSearch)
