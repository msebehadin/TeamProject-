import { NextResponse } from 'next/server';


const projectData = [
  { id: 'p1', name: 'Project 1' },
  { id: 'p2', name: 'Project 2' },
  
];

export async function GET(
  _: Request, 
  context: { params: Promise<{ id: string }> }
) {
  
  const { id } = await context.params;
  
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return NextResponse.json(
      { error: 'Project not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(project);
}