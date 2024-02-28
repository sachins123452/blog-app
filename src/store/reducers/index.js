// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import auth from './auth';
import placeOrder from './placeOrder';


// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, auth, placeOrder });

export default reducers;
