'use client'
import { useProjects } from "./hooks/useProjectsquery";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@radix-ui/react-progress";

const Page = () => {
  const { data: projects = [], isLoading, error } = useProjects(6);
  if (isLoading) return <p>Loading projects...</p>;
  if (error) return <p>failed to load projects</p>;
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Projects</h1>
      <Card>
        <CardHeader>
          <CardTitle>Project list</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[220px]">Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.name}</TableCell>
                  <TableCell>{project.status} </TableCell>
                  <TableCell className="w-[180px]">
                    <div className="flex items-center  gap-2">
                      <Progress
                        value={project.progress}
                        className="h-2 flex-1"
                      />
                      <span className="text-xs text-muted-foreground">
                        {project.progress}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{project.deadline}</TableCell>
                  <TableCell className="text-right">
                   {project.priority}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
