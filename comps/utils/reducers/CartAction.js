export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const GET_TOTAL_CART = 'GET_TOTAL_CART';
export const INCREASE_CART_QTY = 'INCREASE_CART_QTY';
export const DECREASE_CART_QTY = 'DECREASE_CART_QTY';

export const addToCartAct = data => {
    return {
        type: ADD_TO_CART,
        payload: {...data, quantity: 1}
    }
}

export const removeFromCartAct = (id, data) => {
    const dataNew = data.filter(data => data.id != id);
    return {
        type: REMOVE_FROM_CART,
        payload: dataNew
    }
}

export const increaseQtyAct = (id, data) => {
    const dataNew = data.map(data => {
        if(data.id == id) {
            let itemCopy = Object.assign({}, data);
            itemCopy.quantity += 1;
            return itemCopy;
        }
        return data;
    });

    return {
        type: INCREASE_CART_QTY,
        payload: dataNew
    }
}

export const decreaseQtyAct = (id, data) => {
    const dataNew = data.map(data => {
        if(data.id == id) {
            let itemCopy = Object.assign({}, data);
            if(itemCopy.quantity <= 1) return data;
            itemCopy.quantity -= 1;
            return itemCopy;
        }
        return data;
    });

    return {
        type: DECREASE_CART_QTY,
        payload: dataNew
    }
}