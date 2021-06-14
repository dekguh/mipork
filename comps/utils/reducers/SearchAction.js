const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';

export const updateSearchTextAct = text => {
    return {
        type: UPDATE_SEARCH_TEXT,
        payload: text
    }
}