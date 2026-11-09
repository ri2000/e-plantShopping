import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name, img, cost} = action.payload;
        const existingItem = state.items.find(plant => plant.name === name);
        if (existingItem){
            existingItem.quantity++;
        }
        else{
            state.items.push({name, img, cost, quantity: 1})
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(plant => plant.name !== action.payload);
    },
    updateQuantity: (state, action) => {
        const {name} = action.payload.name;
        const existingItem = state.items.find(plant => plant.name === name);
        if (existingItem){
            existingItem.quantity = action.payload.quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
