import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: null,
}

export const PersonSlice = createSlice({
    name: 'Person',
    initialState,
    reducers: {
        loadPerson: (state,action) => {
            state.info = action.payload;
        },
        removePerson: (state) => {
            state.info = null;
        }
      
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { loadPerson, removePerson } = PersonSlice.actions
  
  export default PersonSlice.reducer