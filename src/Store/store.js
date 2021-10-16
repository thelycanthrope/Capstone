import {createStore,applyMiddleware} from 'redux'
import productReducer from '../Actions/productReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store=createStore(productReducer, applyMiddleware(logger,thunk))

export default store