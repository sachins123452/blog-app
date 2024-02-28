// third-party
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { categoriesAPI } from './services/categories';
import reducers from './reducers/index';
import { SubcategoriesAPI } from './services/Subcategories';
import { orderstatusAPI } from './services/OrderStatus';
import { getWarehouseAPI } from './services/getWarehouses';
import { getOutletMappingAPI } from './services/OutletMapping';
import { CreateTicketAPI, GetAllTicketAPI, TicketTypesAPI } from './services/TicketServices';

// project import
// import reducers from './reducers';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const persistConfig = {
  key: 'root', // Key for storing the persisted state
  storage // Storage method (e.g., localStorage)
  // Other configuration options if needed
  // blacklist: ['placeOrder'],//Temporary slice
  // whitelist:['auth'] // permanent slice
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: {
    persistedReducer,
    // reducers,
    [categoriesAPI.reducerPath]: categoriesAPI.reducer,
    [SubcategoriesAPI.reducerPath]: SubcategoriesAPI.reducer,
    [orderstatusAPI.reducerPath]: orderstatusAPI.reducer,
    [getWarehouseAPI.reducerPath]: getWarehouseAPI.reducer,
    [getOutletMappingAPI.reducerPath]: getOutletMappingAPI.reducer,
    [TicketTypesAPI.reducerPath]: TicketTypesAPI.reducer,
    [CreateTicketAPI.reducerPath]: CreateTicketAPI.reducer,
    [GetAllTicketAPI.reducerPath]: GetAllTicketAPI.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat([
      categoriesAPI.middleware,
      SubcategoriesAPI.middleware,
      getWarehouseAPI.middleware,
      orderstatusAPI.middleware,
      getOutletMappingAPI.middleware,
      TicketTypesAPI.middleware,
      CreateTicketAPI.middleware,
      GetAllTicketAPI.middleware
    ])
});

const persistor = persistStore(store);
//Persist config

// Add an event listener for beforeunload
window.addEventListener('beforeunload', () => {
  // persistor.purge(); // Clear persisted data
});

const { dispatch } = store;

export { store, dispatch, persistor };
