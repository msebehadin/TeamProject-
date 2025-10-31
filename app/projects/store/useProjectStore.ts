
import {create} from 'zustand'
interface ProjectStore{
    filter:string;
    setFilter:(filter:string)=>void;
search:string;
setSearch:(search:string)
}
export const UseProjectStore=create<ProjectStore>((set)=>({
    filter:'All',
    search:'',
    setFilter:(filter)=>set({filter}),
setSearch:(search)=>set({search})
}))