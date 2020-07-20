import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import planReducer from '../reducers/planReducer'
import categoryReducer from '../reducers/categoryReducer'
import itemReducer from '../reducers/itemReducer'
import excludeReducer from '../reducers/excludeReducer'
import allergyReducer from '../reducers/allergyReducer'
import customizeReducer from '../reducers/customizeReducer'
import cartReducer from '../reducers/cartReducer'
import checkoutReducer from '../reducers/checkoutReducer'
const configureStore = () => {
    const store = createStore(combineReducers({
        user:userReducer,
        plan:planReducer,
        category:categoryReducer,
        item:itemReducer,
        exclude:excludeReducer,
        allergy:allergyReducer,
        customize:customizeReducer,
        cart:cartReducer,
        checkout:checkoutReducer
    }),applyMiddleware(thunk))

    return store

}

export default configureStore