'use client'
import {   useQuery } from "@tanstack/react-query";
import axios from 'axios'

interface ProjectData{
    id:number;
    name:string;
    description:string;
    status:string;
    progress:number;
    deadline:string;
    team?:string[]
    priority:string
}
    

const fetchProjects=async ():Promise<ProjectData[]>=>{
const response=await axios.get('/api/projects')
const data:ProjectData[]=response.data
return data
}
export const useProjects=()=>{

    return useQuery<ProjectData[]>({
        queryKey:['projects'],
        queryFn:()=>fetchProjects()
    })
}