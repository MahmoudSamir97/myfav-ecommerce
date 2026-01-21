import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from '@/shared/api/baseApi';

// import { cartReducer } from '@/features/cart';
// import { userReducer } from '@/entities/user';

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,

  // cart: cartReducer,
  // user: userReducer,
});
