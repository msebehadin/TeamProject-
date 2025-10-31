import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface DashboardStat {
  stats: { title: string; value: number }[];
}
const initialState: DashboardStat = {
  stats: [
    { title: "total projects", value: 2 },
    { title: "Active  Member", value: 6 },
    { title: "completed  projects", value: 6 },
  ],
  
};

const dashboardSlice = createSlice({
    name:'dashboard',
    initialState,
    reducers:{
  updateStats(state, action: PayloadAction<DashboardStat["stats"]>) {
      state.stats = action.payload
    },
    }
})
export  const {updateStats}= dashboardSlice.actions
export default dashboardSlice.reducer