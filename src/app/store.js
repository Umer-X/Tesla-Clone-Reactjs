import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../Components/features/cars/carSlice'
export const store = configureStore({
  reducer: {
    car: carReducer
  },
});
