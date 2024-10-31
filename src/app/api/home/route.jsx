import jsonData from "@/json/home.json";

export async function GET(request) {
  return Response.json(jsonData, { status: 200 });
}
