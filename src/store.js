// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers';

// const store = configureStore({
//  reducer: rootReducer,
// });

// export default store;



import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers'

export const store = configureStore({
  reducer: {
    favorite: counterReducer,
  },
})