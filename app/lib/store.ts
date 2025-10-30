import {configureStore} from '@reduxjs/toolkit'
import dashboardReducer from '@/app/dashboard/store/dashboardSlice'
export const store = configureStore({

  reducer: {
 dashboard:dashboardReducer,
  }
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store