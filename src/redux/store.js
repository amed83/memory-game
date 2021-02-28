import { configureStore } from '@reduxjs/toolkit';

import RootReducer from './reducers/rootReducer';

const store = configureStore({ reducer: RootReducer })


export default store;