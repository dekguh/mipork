const cartInitState = {
    dataCart: [],
    totalCart: 0,
}

const cartReducers = (state = cartInitState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                dataCart: [...state.dataCart, action.payload]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                dataCart: action.payload
            }
        case 'GET_TOTAL_CART':
            return {
                ...state,
                totalCart: action.payload
            }
        case 'INCREASE_CART_QTY':
            return {
                ...state,
                dataCart: action.payload
            }
        case 'DECREASE_CART_QTY':
            return {
                ...state,
                dataCart: action.payload
            }
        default:
            return state;
    }
}

export default cartReducers;