'use client'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '@/lib/store'
import { updateStats } from './store/dashboardSlice'

const DashboardPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const stats = useSelector((state: RootState) => state.dashboard.stats)

  const handleRefresh = () => {
    const newStats = [
      { label: "total projects", value: Math.floor(Math.random() * 100) },
      { label: "Active Member", value: Math.floor(Math.random() * 50) },
      { label: "completed projects", value: Math.floor(Math.random() * 80) },
    ]
    dispatch(updateStats(newStats))
  }

  const totalProjects = stats.find(s => s.label === "total projects")?.value ?? 0
  const activeMembers = stats.find(s => s.label === "Active Member")?.value ?? 0
  const completedProjects = stats.find(s => s.label === "completed projects")?.value ?? 0

  return (
    <div className="p-8 space-y-6 w-full max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <Button onClick={handleRefresh} className="bg-blue-600 hover:bg-blue-700">
          Refresh Stats
        </Button>
      </div>

      {/* Improved Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="w-full hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Total Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">{totalProjects}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">All time projects</p>
          </CardContent>
        </Card>

        <Card className="w-full hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Active Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-green-600 dark:text-green-400">{activeMembers}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Currently active</p>
          </CardContent>
        </Card>

        <Card className="w-full hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-700 dark:text-gray-300">
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
  )
}

export default DashboardPage