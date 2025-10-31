// app/api/projects/route.ts
import { NextResponse } from "next/server";
import projectsData from '../../../data/projects.json';

export async function GET() {
  try {
    // Return the JSON data
    return NextResponse.json(projectsData);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load projects data' },
      { status: 500 }
    );
  }
}