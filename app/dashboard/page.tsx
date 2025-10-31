'use client'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '@/app/lib/store'
import Chart from '@/components/Chart/chart'
import { updateStats } from './store/dashboardSlice'

const DashboardPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const stats = useSelector((state: RootState) => state.dashboard.stats)

  const handleRefresh = () => {
    const newStats = [
      { title: "total projects", value: Math.floor(Math.random() * 100) },
      { title: "Active Member", value: Math.floor(Math.random() * 50) },
      { title: "completed projects", value: Math.floor(Math.random() * 80) },
    ]
    dispatch(updateStats(newStats))
  }

  const totalProjects = stats.find(s => s.title === "total projects")?.value ?? 0
  const activeMembers = stats.find(s => s.title === "Active Member")?.value ?? 0
  const completedProjects = stats.find(s => s.title === "completed projects")?.value ?? 0

  return (
    <div className="p-8 space-y-6 w-full max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Team Project</h1>
        <Button 
          onClick={handleRefresh} 
          className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          Refresh Stats
        </Button>
      </div>
<div>
  {/* Grid Layout with Dark Mode */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Total Projects Card */}
        <Card className="w-full hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              Total Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">{totalProjects}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">All time projects</p>
          </CardContent>
        </Card>

        {/* Active Members Card */}
        <Card className="w-full hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              Active Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-green-600 dark:text-green-400">{activeMembers}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Currently active</p>
          </CardContent>
        </Card>

        {/* Completed Projects Card */}
        <Card className="w-full hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              Completed Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-purple-600 dark:text-purple-400">{completedProjects}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Successfully delivered</p>
          </CardContent>
        </Card>
      </div>
    </div>
    <Chart/>
</div>
    
  )
}

export default DashboardPage