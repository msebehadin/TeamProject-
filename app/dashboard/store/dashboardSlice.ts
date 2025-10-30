import { createSlice } from "@reduxjs/toolkit";

interface DashboardStat {
  stats: { label: string; value: number }[];
}
const initialState: DashboardStat = {
  stats: [
    { label: "total projects", value: 2 },
    { label: "Active  Member", value: 6 },
    { label: "completed  projects", value: 6 },
  ],
};

const dashboardSlice = createSlice({
    name:'dashboard',
    initialState,
    reducers:{

    }
})
export default dashboardSlice.reducer