

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: []
}

export const counterSlice = createSlice({
  name: 'favorite',
  initialState:initialState,
  reducers: {

    updateStore: (state, action) => {
      console.log('----------------------------------------------------')

      // console.log(action.payload )
      //  state.value += action.payload 
      //  console.log('new one',action.payload )

    },
    addFavorite: (state, action) => {
      console.log('---------------------add favorite---------------------')
      
      // console.log(action.payload?.id);
       state.value = action.payload

      //  state.value.push(action.payload)


    },
    removeFavorite: (state, action) => {
      console.log('------------------remove favorite------------------------')
      // state.value = action.payload

    },    
  },
})

// Action creators are generated for each case reducer function
export const { updateStore,addFavorite,removeFavorite } = counterSlice.actions

export default counterSlice.reducer