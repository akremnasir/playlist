import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  viewMyForm: false,
  formType: ''
};

const viewForm= createSlice({
  name: 'selected',
  initialState,
  reducers: {
    handleViewMyForm: (state, action) => {
        state.viewMyForm = state.viewMyForm ? false : true 
        state.formType = action.payload
    },
  },
});

export const { handleViewMyForm } = viewForm.actions;    
export default viewForm.reducer;