import { NextResponse } from "next/server";
import projects from '@/data/projects.json';

export function GET(_: Request, { params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    return NextResponse.json(
      { message: `Oops! No project found with ID "${params.id}".` },
      { status: 404 }
    );
  }

  return NextResponse.json(project);
}
