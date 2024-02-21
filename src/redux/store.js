import { configureStore } from '@reduxjs/toolkit';
import { productReducer, selectedProductReducer } from './reducers/productReducer';


const store = configureStore({
    reducer: {
        allProducts: productReducer,
        product: selectedProductReducer
    }
})

export default store;