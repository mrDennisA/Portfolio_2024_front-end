import jsonData from "@/json/projects.json";

export async function GET(request) {
  return Response.json(jsonData, { status: 200 });
}
