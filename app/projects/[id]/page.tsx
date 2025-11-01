"use client";

import { useParams } from "next/navigation";
import { useProject } from "../hooks/useProjectsquery";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.id as string;

  const { data: project, isLoading, error } = useProject(projectId);

  if (isLoading) return <p className="p-6 text-sm text-muted-foreground">Loading...</p>;
  if (error) return <p className="p-6 text-sm text-red-500">Failed to load project.</p>;
  if (!project) return <p className="p-6 text-sm text-muted-foreground">Project not found.</p>;

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <nav className="text-sm text-muted-foreground">
          <Link href="/projects" className="hover:underline">Projects</Link> / {project.name}
        </nav>
        <Link href="/projects">
          <Button variant="outline">← Back</Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">{project.name}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p><span className="font-semibold">Description:</span> {project.description}</p>
          <p><span className="font-semibold">Status:</span> {project.status}</p>
          <p><span className="font-semibold">Deadline:</span> {project.deadline}</p>
          <p><span className="font-semibold">Priority:</span> {project.priority ?? "N/A"}</p>

          <div>
            <p className="font-semibold mb-1">Progress</p>
            <Progress value={project.progress} className="h-2" />
            <span className="text-xs text-muted-foreground">{project.progress}%</span>
          </div>

          {project.team && (
            <div>
              <p className="font-semibold mb-1">Team Members:</p>
              <ul className="list-disc list-inside text-sm">
                {project.team.map((member) => (
                  <li key={member}>{member}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
