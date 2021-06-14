const searchInitState = {
    searchText: ''
}

const Searchreducers = (state = searchInitState, action) => {
    switch(action.type) {
        case 'UPDATE_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.payload
            }
        default:
            return state;
    }
}

export default Searchreducers;