import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import planReducer from '../reducers/planReducer'
import categoryReducer from '../reducers/categoryReducer'
import itemReducer from '../reducers/itemReducer'
import excludeReducer from '../reducers/excludeReducer'
import allergyReducer from '../reducers/allergyReducer'
import customizeReducer from '../reducers/customizeReducer'
const configureStore = () => {
    const store = createStore(combineReducers({
        user:userReducer,
        plan:planReducer,
        category:categoryReducer,
        item:itemReducer,
        exclude:excludeReducer,
        allergy:allergyReducer,
        customize:customizeReducer
    }),applyMiddleware(thunk))

    return store

}

export default configureStore